const OtpService = require('../Services/otp.service');
const HashService = require('../Services/hash.service');
const otpService = require('../Services/otp.service');
const userService = require('../Services/user.service')
const UserDto = require('../dtos/user.dtos')
const tokenService = require('../Services/token.service')
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

    await tokenService.storeRefreshToken(refreshToken , user._id);

    res.cookie('refreshToken',refreshToken , 
    {
      maxAge: 1000*60**60*24*30,
      httpOnly:true,
    })

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 ** 60 * 24 * 30,
      httpOnly: true,
    });


    const userDto = new UserDto(user)
    res.json({user:userDto , auth:true});

  }

  async refresh(req,res)
  {
    const {refreshToken : refreshTokenFromCookies} = req.cookies;
    let userData;
    try {
      userData =  await tokenService.verifyRefreshToken(refreshTokenFromCookies)
    } catch (error) {
      return res.status(401).json({message:'Invalid token!'})
    }

    try {
      const token  = await tokenService.findRefreshToken(userData._id ,  refreshTokenFromCookies);
      if(!token)
      {
        return res.status(401).json({ message: "Invalid token" });
      }
    } catch (error) {
      return res.status(500).json({message:'Internal Error'});
    }

    const user = await userService.finduser({_id : userData._id})
    if(!user)
    {
      return res.status(404).json({ message: "Invalid User!" });
    }

    const {refreshToken  , accessToken} = tokenService.generateToken({_id:userData._id})

    try {
      await tokenService.updateRefreshToken( userData._id , refreshToken)
    } catch (error) {
      return res.status(500).json({ message: "Internal Error" });
    }
     res.cookie("refreshToken", refreshToken, {
       maxAge: 1000 * 60 ** 60 * 24 * 30,
       httpOnly: true,
     });

     res.cookie("accessToken", accessToken, {
       maxAge: 1000 * 60 ** 60 * 24 * 30,
       httpOnly: true,
     });

     const userDto = new UserDto(user);
     res.json({ user: userDto, auth: true });
  }

  async logout(req, res)
  {
    const { refreshToken } = req.cookies;
    await tokenService.removeToken(refreshToken)

    res.clearCookie('refreshToken');
    res.clearCookie("accessToken");
    res.json({user:null , auth:false});
  }
}


module.exports = new AuthController();