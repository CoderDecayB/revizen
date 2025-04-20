import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  name:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"]
  },
  password:{
    type: String,
    required: true,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
  },
  mobile:{
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid mobile number"]
  },
},{timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;