import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: String,
  discription: String,
  thumbnail: String,
  category: { type: mongoose.Types.ObjectId, ref: "categories" },
});
export const SubcategoryModal = mongoose.model(
  "subcategories",
  subcategorySchema
);
