const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, contact_no } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    contact_no,
    avatar: {
      public_id: "This is sample public id",
      url: "This is sample url",
    },
  });

  sendToken(user, 201, res);

});


exports.loginUser = catchAsyncErrors(async(req, res, next) => {
  const {email, password} = req.body;

  if(!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({email}).select("+password");

  if(!user) {
    return next(new ErrorHandler("Invalid email or passowrd", 401));
  }

  const isPasswordMatched = user.comparePassword(password);

  if(!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or passowrd", 401));
  }

  sendToken(user, 200, res);
});