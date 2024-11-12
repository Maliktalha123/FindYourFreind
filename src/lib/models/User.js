import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { lat: Number, long: Number },
  profileImg: String,
  address: String,
  bio: String,
  role: { type: String, default: "user", enum: ["user", "admin"] },
});

export const UserModal =
  mongoose.models.users || mongoose.model("users", userSchema);
