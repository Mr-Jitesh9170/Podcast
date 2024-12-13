const mongoose = require("mongoose")

// Scheama =>
const Scheama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is missing!"
    },
    email: { 
      type: String,
      required: "Email is missing!",
      unique: true
    },
    password: {
      type: String,
      required: "Password is missing!"
    },
    token: [String]
  }
) 

// models =>
module.exports = mongoose.model("users", Scheama);
