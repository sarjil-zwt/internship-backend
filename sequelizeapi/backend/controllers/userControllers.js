// const User = require("../models/userModel");
const db = require("../models");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorhander");

const getToken = (id) => {
  return jwt.sign({ id }, "sarjil", {
    expiresIn: "3d",
  });
};

const User = db.user;

exports.signupUser = async (req, res, next) => {
  try {
    const email = req.body.email;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.json({
        status: 400,
        message: "Email Already exist",
      });
    }

    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 201,
      success: true,
      newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // checking if user has given password and email both

    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({
      where: { email },
      raw: true,
    });

    console.log(user);

    if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = password === user.password;

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const userRepo = myDataSource.getRepository(User);
    const user = userRepo.update({ id: req.user.id }, req.body);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
