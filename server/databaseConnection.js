const mongoose = require("mongoose");

const URL =
  "mongodb+srv://ayush:ayush@cluster0.trnog5t.mongodb.net/?retryWrites=true&w=majority";

const databaseConnection = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoS connection running!");
  } catch (err) {
    console.log("mongoS connection error!", err);
  }
};

module.exports = databaseConnection;
