// src/components/PhoneAuth.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // create or reuse reCAPTCHA verifier
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        { size: "invisible" }, // or "normal" for visible widget
        auth
      );
      // render returns a promise with the widgetId
      window.recaptchaVerifier.render().catch(() => {});
    }
    return () => {
      // optional cleanup on unmount (safe-guard)
      try {
        if (window.recaptchaVerifier && window.recaptchaVerifier.clear) {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const sendOTP = async () => {
    setLoading(true);
    try {
      const appVerifier = window.recaptchaVerifier;
      // phone must be E.164 format, e.g. +919876543210
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent");
    } catch (err) {
      console.error("sendOTP error", err);
      alert(err.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    if (!confirmationResult) return alert("No OTP request found");
    setLoading(true);
    try {
      const credential = await confirmationResult.confirm(code);
      const user = credential.user;
      const idToken = await user.getIdToken(); // send this to backend
      // Send ID token to backend to create a session or verify
      const resp = await fetch("/api/sessionLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
        credentials: "include" // if using cookies
      });
      if (!resp.ok) throw new Error(await resp.text());
      alert("Phone verified & session created!");
    } catch (err) {
      console.error("verifyCode error", err);
      alert(err.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div id="recaptcha-container"></div>

      {!confirmationResult ? (
        <>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91XXXXXXXXXX"
          />
          <button onClick={sendOTP} disabled={loading}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter 6-digit code"
          />
          <button onClick={verifyCode} disabled={loading}>Verify OTP</button>
        </>
      )}
    </div>
  );
}
