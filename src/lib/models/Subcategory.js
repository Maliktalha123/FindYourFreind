import mongoose from "mongoose";
import { CategoryModal } from "./Category";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: { type: String, required: true },

  discription: String,
  thumbnail: { type: String, required: true },
  category: {
    type: mongoose.Types.ObjectId,
    ref: CategoryModal,
    required: true,
  },
});
export const SubcategoryModal =
  mongoose.models.subcategories ||
  mongoose.model("subcategories", subcategorySchema);
