import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentNo: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  grade: {
    type: String,
  },
  whatsappNumber: {
    type: String,
  },
  parentContactNumber: {
    type: String,
  },
  attendance: [
    {
      date: {
        type: Date,
        required: true,
      },
      present: {
        type: Boolean,
        required: true,
      },
    },
  ],
  tests: [
    {
      title: {
        type: String,
      },
      marks: {
        type: String,
      },
      grade: {
        type: String,
      },
    },
  ],
  payment: [
    {
      date: {
        type: Date,
        required: true,
      },
      status: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
  ],
  grades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
