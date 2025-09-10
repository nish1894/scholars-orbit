const express = require("express");
const { createAccount, login } = require("../controllers/auth.controller");

const router = express.Router();

// /auth/create-account
router.post("/create-account", createAccount);

// /auth/login
router.post("/login", login);

module.exports = router;


