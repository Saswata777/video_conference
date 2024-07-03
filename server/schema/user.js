import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username:String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("user", userSchema);
