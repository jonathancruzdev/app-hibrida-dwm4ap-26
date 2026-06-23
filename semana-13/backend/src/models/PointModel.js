import mongoose from "mongoose";

const pointSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      default: null
    },
    }, { timestamps: true }
);

export default mongoose.model("Point", pointSchema);