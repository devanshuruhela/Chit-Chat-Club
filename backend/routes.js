const router = require('express').Router();
const AuthController = require('./Controllers/auth.controller');
const activateController = require('./Controllers/activate.controller');
const authMiddleware = require('./middlewares/auth.middleware');
const authController = require('./Controllers/auth.controller');
const roomsController = require('./Controllers/rooms.controller')

router.post('/api/send-otp' , AuthController.sendOtp);
router.post("/api/verify-otp", AuthController.verifyOtp);
router.post("/api/activate" ,authMiddleware , activateController.activate )  
router.get("/api/refresh",authController.refresh)
router.post("/api/logout"  ,authMiddleware, authController.logout)
router.post("/api/rooms", authMiddleware, roomsController.create)
router.get("/api/rooms" , authMiddleware, roomsController.index);

module.exports = router;