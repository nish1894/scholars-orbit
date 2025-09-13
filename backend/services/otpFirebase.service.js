const admin = require("firebase-admin");
require("dotenv").config();

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    ),
  });
}

/**
 * Send OTP via Firebase
 * @param {string} phone - Phone number to send OTP
 */
async function sendOtp(phone) {
  try {
    const sessionInfo = await admin.auth().createSessionCookie(phone, {
      expiresIn: 5 * 60 * 1000, // 5 minutes
    });
    return { success: true, sessionInfo, message: "OTP sent via Firebase" };
  } catch (err) {
    throw new Error(`Failed to send OTP: ${err.message}`);
  }
}

/**
 * Verify OTP via Firebase
 * @param {string} phone - Phone number
 * @param {string} otp - OTP to verify
 */
async function verifyOtp(phone, otp) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(otp);
    if (decodedToken.phone_number === phone) {
      return { success: true, message: "OTP verified via Firebase" };
    }
    throw new Error("Invalid OTP");
  } catch (err) {
    throw new Error(`Failed to verify OTP: ${err.message}`);
  }
}

module.exports = { sendOtp, verifyOtp };
