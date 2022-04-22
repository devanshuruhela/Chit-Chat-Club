const OtpService = require('../Services/otp.service');
const HashService = require('../Services/hash.service');
const otpService = require('../Services/otp.service');
const userService = require('../Services/user.service')

const tokenService = require('../Services/token.service')
const express = require('express');
class AuthController{
  async sendOtp(req,res)
  {
    const {phone} = req.body;
    if(!phone)
    {
      res.status(400).json({message:'Phone field is required'})
    }

    const otp =  await OtpService.generateOtp();

    const expiretime = 1000 * 60 * 2;
    const expires = Date.now() + expiretime;
    const data = `${phone}.${otp}.${expires}`
    const hash = HashService.hashOtp(data);

    try {
      // await otpService.sendBySms(phone, otp);
      res.json({
        hash:`${hash}.${expires}`,
        phone,
        otp
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({message:"message sending failed"})
    }
  }

  async verifyOtp(req , res)
  {
    const {otp , phone, hash} = req.body;

    if(!otp || !hash || !phone)
    {
      res.status(400).json({message:'All fields are required'});
    }

    const [hashedOtp , expires] = hash.split('.');

    if(Date.now()> +expires)
    {
      res.status(400).json({message:"OTP expired"});
    }

    const data = `${phone}.${otp}.${expires}`;

    const isvalid = otpService.verifyOtp(hashedOtp , data);

    if(!isvalid)
    {
      res.status(400).json({message:"Invalid OTP"});
    }

    let user;
    // let accessToken;
    // let refreshToken;

    try {
      user = await userService.finduser({phone});
      if(!user)
      {
        user = await userService.createUser({phone})
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({message:"Db error"})
    }

    //JWT token
    const {accessToken , refreshToken} = tokenService.generateToken({_id:user._id , activated: false});

    res.cookie('refreshtoken',refreshToken , 
    {
      maxAge: 1000*60**60*24*30,
      httpOnly:true,
    })

    res.json({accessToken , user});

  }
}


module.exports = new AuthController();