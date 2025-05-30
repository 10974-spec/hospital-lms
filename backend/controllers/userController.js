import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// API TO REGISTER USER

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // VALIDATING EMAIL

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Enter A valid email" });
    }

    // validating password

    if (password.length < 8) {
      return res
       .status(400)
       .json({ success: false, message: "Password must be at least 8 characters" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    }

    // save user to db

    const newUser = new userModel(userData);
    const user = await newUser.save();
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({
      success: true,
      message: "User registered successfully",
      token,
    })

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message:error.message,
    });
  }
};

export { registerUser };
