import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: { type: String, required: true },
  discription: { type: String, required: true },
  thumbnail: { type: String, required: true },
});
export const CategoryModal =
  mongoose.models.categories || mongoose.model("categories", categorySchema);
