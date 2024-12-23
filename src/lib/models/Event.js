import mongoose from "mongoose";
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  discription: String,
  startTime: String,
  endTime: String,
  startDate: String,
  endDate: String,
  location: {
    lat: Number,
    long: Number,
  },
  address: String,
  thumbnail: String,
  category: { type: mongoose.Types.ObjectId, ref: "categories" },
  subcategory: { type: mongoose.Types.ObjectId, ref: "subcategories" },
  createdBy: { type: mongoose.Types.ObjectId, ref: "users" },
  going: [{ type: mongoose.Types.ObjectId, ref: "users" }],
});
export const EventModal =
  mongoose.models.events || mongoose.model("events", eventSchema);
