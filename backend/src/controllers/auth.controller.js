const User = require("../models/user.model");
const logger = require("../config/logger");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../config/jwt");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All the fields are required",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 letters",
      });
    }
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      logger.info(`A user created: ${newUser._id}`);
      return res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      return res.status(400).json({
        message: "Invalid user data",
      });
    }
  } catch (error) {
    logger.error(`Auth Controller :: signup : ${error.message}`);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isPasswordCorrect = bcrypt.compare(password, isUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    generateToken(isUser._id, res);
    return res.status(200).json(isUser);
  } catch (error) {
    logger.error(`Auth Controller :: login : ${error.message}`);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    logger.error(`Auth Controller :: logout : ${error.message}`);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const authCheck = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    logger.error(`Auth Controller :: Auth Check : ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = { signup, login, logout, authCheck };
