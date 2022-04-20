const crypto = require('crypto');
const hashService = require('./hash.service');
const smssid = process.env.SMS_SID;
const authtoken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smssid , authtoken , {
  lazyLoading:true
})
class OtpService
{
  async generateOtp(){
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone,otp){
    return await twilio.messages.create({
      to: phone,
      from:process.env.SMS_FROM_NUMBER,
      body:`Your Chit Chat Club verification code is: ${otp}`,
    })
  }

  verifyOtp(hashedOtp , data) {
    let computedHash = hashService.hashOtp(data);

    return (computedHash === hashedOtp)

  }

}

module.exports = new OtpService();