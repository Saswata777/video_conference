import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lasstName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
});

export const User = mongoose.model("user", userSchema);
