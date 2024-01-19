const UserDetail = require("../models/usermodel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// register
const RegisterUser = async (req, res) => {
  const { name, username, password, address, phone, email } = req.body;
  const userExist = await UserDetail.findOne({ email });
  if (userExist) {
    return res.json("username already exists");
  }
  const bcryptedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name: name,
    username: username,
    address: address,
    email: email,
    phone: phone,
    password: bcryptedPassword,
  };
  await UserDetail.create(newUser);

  res.status(201).json({ success: "user created successfully", newUser });
};

// login

const logIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);

  try {
    const logInUser = await UserDetail.findOne({ email });
    if (!logInUser) {
      return res.status(400).json({ msg: "invalid username" });
    }
 console.log(logInUser.email)
    const passwordMatch = await bcrypt.compare(password, logInUser.password);
    if (!passwordMatch) {
      return res.send("Invalid login details");
    }

    console.log(logInUser);
    const token = jwt.sign({ userId: logInUser._id }, "heloakri", {
      expiresIn: "6h",
    });

    
    res.json({ token, logInUser, msg: "login successfull" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const testcontroller = async (req, res) => {
  try {
    res.json("protected route");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { RegisterUser, logIn, testcontroller };
