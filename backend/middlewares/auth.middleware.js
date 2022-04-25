const tokenService = require("../Services/token.service");

module.exports = async function(req, res , next)
{
  try {
    const {accesstoken} = req.cookies;
    if(!accesstoken)
    {
      throw new Error();
    }
    const userData = await tokenService.verifyAccessToken(accesstoken)
    console.log(userData)
    next();
  } catch (error) {
    res.status(401).json({message:'Invalid token'})
  }
  next();
}