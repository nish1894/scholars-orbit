require("dotenv").config();
const config = require("./config.json");

const mongoose = require("mongoose");

mongoose.connect(config.ConnectionString);

const User = require("./models/User");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./middlewares/auth");

// Configure env
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define port
const PORT = process.env.PORT || 8000;

// Test route
app.get("/", (req, res) => {
  res.send("Server is running . . 5!");
});

// Mount routers
const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
