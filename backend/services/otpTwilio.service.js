const twilio = require("twilio");
require("dotenv").config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const otpStore = {};

/**
 * Generate a 6-digit OTP
 */
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

/**
 * Send OTP via Twilio
 * @param {string} phone - Phone number to send OTP
 */
async function sendOtp(phone) {
  const otp = generateOTP();
  otpStore[phone] = otp; // Save OTP for verification

  try {
    await client.messages.create({
      body: `Your verification code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    return { success: true, message: "OTP sent" };
  } catch (err) {
    throw new Error(err.message);
  }
}

/**
 * Verify OTP
 * @param {string} phone - Phone number
 * @param {string} otp - OTP to verify
 */
function verifyOtp(phone, otp) {
  if (otpStore[phone] && otpStore[phone] === otp) {
    delete otpStore[phone]; // Clear OTP once verified
    return { success: true, message: "OTP verified" };
  }
  throw new Error("Invalid OTP");
}

module.exports = { sendOtp, verifyOtp };