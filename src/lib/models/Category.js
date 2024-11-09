import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: String,
  discription: String,
  thumbnail: String,
});
export const CategoryModal = mongoose.model("categories", categorySchema);
