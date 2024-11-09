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
  profileImg: String,
  createBy: { type: mongoose.Types.ObjectId, ref: "users" },
  bio: String,
});

export const EventModal = mongoose.model("events", eventSchema);
