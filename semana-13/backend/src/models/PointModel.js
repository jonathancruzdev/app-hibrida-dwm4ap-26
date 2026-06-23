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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // Referencia a un ObjectId
      ref: "User",
      required: true
    },
    }, { timestamps: true }
);

export default mongoose.model("Point", pointSchema);