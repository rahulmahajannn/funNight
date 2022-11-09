const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  query: {
    type: String,
  },
});

const CONTACT = mongoose.model("contactSchema", contactSchema);
module.exports = { CONTACT };
