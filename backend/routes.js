const router = require('express').Router();
const AuthController = require('./Controllers/auth.controller');
const activateController = require('./Controllers/activate.controller');
const authMiddleware = require('./middlewares/auth.middleware');
const authController = require('./Controllers/auth.controller');

router.post('/api/send-otp' , AuthController.sendOtp);
router.post("/api/verify-otp", AuthController.verifyOtp);
router.post("/api/activate" ,authMiddleware , activateController.activate )  
router.get("/api/refresh",authController.refresh)
module.exports = router;