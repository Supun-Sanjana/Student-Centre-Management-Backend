import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  centerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Center",
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  schedule: [{ type: Date }],
  available: {
    type: Boolean,
    default: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Grade = mongoose.model("Grade", gradeSchema)
export default Grade