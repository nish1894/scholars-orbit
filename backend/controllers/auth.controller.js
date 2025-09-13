const twilio = require("twilio");

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendOtp, verifyOtp } = require("../services/otpTwilio.service");
require("dotenv").config();


// Send OTP
async function sendOtpHandler(req, res) {
  const { phone } = req.body;

  try {
    const result = await sendOtp(phone);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

// Verify OTP
async function verifyOtpHandler(req, res) {
  const { phone, otp } = req.body;

  try {
    const result = verifyOtp(phone, otp);
    res.json(result);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

// POST /auth/create-account
async function createAccount(req, res) {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).json({ message: "Name is required" });
  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!password)
    return res.status(400).json({ message: "Password is required" });

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    const safeUser = newUser.toJSON ? newUser.toJSON() : newUser;
    return res.status(201).json({
      error: false,
      user: safeUser,
      message: "User created successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}

// POST /auth/login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch)
      return res.status(401).json({ message: "Invalid Password" });

    const payload = { id: user._id, email: user.email, role: user.role };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "36000m",
    });

    const safeUser = user.toJSON ? user.toJSON() : user;
    return res.json({
      error: false,
      email: email,
      accessToken,
      message: "loginSuccessful",
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createAccount,
  login,
  sendOtp: sendOtpHandler,
  verifyOtp: verifyOtpHandler,
};
