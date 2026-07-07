const Attendance = require("../models/Attendance");

const addAttendance = async (req, res) => {
  try {
    const attendance =
      await Attendance.create(req.body);

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAttendance = async (req, res) => {
  try {
    const attendance =
      await Attendance.find();

    res.json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAttendance = async (
  req,
  res
) => {
  try {
    await Attendance.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Attendance deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addAttendance,
  getAttendance,
  deleteAttendance,
};