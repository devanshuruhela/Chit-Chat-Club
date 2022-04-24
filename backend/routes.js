const router = require('express').Router();
const AuthController = require('./Controllers/auth.controller');
const activateController = require('./Controllers/activate.controller');
const authMiddleware = require('./middlewares/auth.middleware');
router.post('/api/send-otp' , AuthController.sendOtp);
router.post("/api/verify-otp", AuthController.verifyOtp);
router.post("/api/activate" ,authMiddleware , activateController.activate )  

module.exports = router;