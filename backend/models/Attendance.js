const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },

    attendedClasses: {
      type: Number,
      required: true,
    },

    totalClasses: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Attendance",
  attendanceSchema
);