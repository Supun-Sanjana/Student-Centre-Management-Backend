import mongoose from "mongoose";

const centerSchema = new mongoose.Schema({
  centerName: {
    type: String,
  },
  centerLocation: {
    type: String,
  },
  grades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
  ],
});

const Center = mongoose.model("Center", centerSchema);
export default Center;
