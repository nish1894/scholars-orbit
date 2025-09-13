const express = require("express");
const { createAccount, login } = require("../controllers/auth.controller");
const { sendOtp, verifyOtp } = require("../controllers/auth.controller");


const router = express.Router();

// /auth/create-account
router.post("/create-account", createAccount);

// /auth/login
router.post("/login", login);

// /auth/send-otp
router.post("/send-otp", sendOtp);

// /auth/verify-otp
router.post("/verify-otp", verifyOtp);

module.exports = router;


