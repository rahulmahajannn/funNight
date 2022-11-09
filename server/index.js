const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const databaseConnection = require("./databaseConnection");
const { USER } = require("./model/userModel");
const { CONTACT } = require("./model/contactModel");

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

databaseConnection();

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.json({
      status: 400,
      message: "please complete the inputs",
    });
  }

  const isEmailExist = await USER.findOne({ email });
  if (isEmailExist) {
    return res.json({
      status: 400,
      message: "Email already Exist",
    });
  }

  const encryptedPassword = await bcrypt.hash(password, 8);
  const userData = new USER({
    email,
    password: encryptedPassword,
    name,
  });
  userData.save();
  return res.json({
    status: 200,
    message: "registered successfully",
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(
    "🚀 ~ file: index.js ~ line 49 ~ app.post ~ email, password",
    email,
    password
  );
  const userData = await USER.findOne({ email });
  if (!userData) {
    return res.json({
      status: 400,
      message: "Email not exist!",
    });
  }
  const userDataToShare = new Object(userData);
  const passwordMatched = await bcrypt.compare(password, userData.password);
  if (!passwordMatched) {
    return res.json({
      status: 400,
      message: "password is not correct",
    });
  }
  return res.json({
    status: 200,
    message: "login completed",
    user: userDataToShare,
  });
});

app.post("/contactus", async (req, res) => {
  const { email, name, query } = req.body;
  if (!email || !name || !query) {
    return res.json({
      status: 400,
      message: "please complete the inputs",
    });
  }
  const contactData = new CONTACT({
    email,
    query,
    name,
  });
  contactData.save();
  return res.json({
    status: 200,
    message: "query submitted",
  });
});

app.listen(8000, () => {
  console.log(`port is running on 3000`);
});
