const OtpService = require('../Services/otp.service');
const HashService = require('../Services/hash.service');
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

    res.send({hash})
  }
}


module.exports = new AuthController();