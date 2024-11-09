import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: String,
  email: String,
  password: String,
  location: { lat: Number, long: Number },
  profileImg: String,
  address: String,
  bio: String,

});


export const UserModal = mongoose.model('users',userSchema)