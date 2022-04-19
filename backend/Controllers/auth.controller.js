const OtpService = require('../Services/otp.service');
class AuthController{
  async sendOtp(req,res)
  {
    const {phone} = req.body;
    if(!phone)
    {
      res.status(400).json({message:'Phone field is required'})
    }

    const otp =  await OtpService.generateOtp();

    res.send({otp:otp})
  }
}


module.exports = new AuthController();