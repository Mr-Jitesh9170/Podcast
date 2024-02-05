import mongoose from "mongoose"

// Scheama =>
const Scheama =new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
)

// models =>
export const Register = mongoose.model("Register", Scheama);
