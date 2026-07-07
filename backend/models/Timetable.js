const mongoose = require("mongoose");

const timetableSchema =
  new mongoose.Schema(
    {
      subject: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Timetable",
  timetableSchema
);