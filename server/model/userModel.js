const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
});

const USER = mongoose.model("userSchema", userSchema);
module.exports = { USER };
