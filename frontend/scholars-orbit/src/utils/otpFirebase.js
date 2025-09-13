// src/otpFirebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLwHKNxQmQcgf24H5EKrxdpw1tLf9UQPA",
  authDomain: "sorbit-c80a5.firebaseapp.com",
  projectId: "sorbit-c80a5",
  storageBucket: "sorbit-c80a5.firebasestorage.app",
  messagingSenderId: "443463267141",
  appId: "1:443463267141:web:850433a4b4c7e29d55842c",
  measurementId: "G-3E0TT222QH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
