const OtpService = require('../Services/otp.service');
const HashService = require('../Services/hash.service');
const otpService = require('../Services/otp.service');
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
      await otpService.sendBySms(phone, otp);
      res.json({
        hash:`${hash}.${expires}`,
        phone,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({message:"message sending failed"})
    }
  }
}


module.exports = new AuthController();