const Timetable = require("../models/Timetable");

const addClass = async (req, res) => {
  try {
    const timetable =
      await Timetable.create(req.body);

    res.status(201).json(timetable);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getClasses = async (req, res) => {
  try {
    const classes =
      await Timetable.find();

    res.json(classes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteClass = async (
  req,
  res
) => {
  try {
    await Timetable.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Class deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addClass,
  getClasses,
  deleteClass,
};