const Assignment = require("../models/Assignment");

const addAssignment = async (req, res) => {
  try {
    const assignment =
      await Assignment.create(req.body);

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAssignments = async (req, res) => {
  try {
    const assignments =
      await Assignment.find();

    res.json(assignments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAssignment = async (
  req,
  res
) => {
  try {
    await Assignment.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Assignment deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateAssignment = async (
  req,
  res
) => {
  try {
    console.log("ID:", req.params.id);
    console.log("BODY:", req.body);

    const assignment =
      await Assignment.findById(
        req.params.id
      );

    console.log(
      "FOUND:",
      assignment
    );

    if (!assignment) {
      return res.status(404).json({
        message:
          "Assignment not found",
      });
    }

    assignment.status =
      req.body.status;

    await assignment.save();

    res.json(assignment);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addAssignment,
  getAssignments,
  deleteAssignment,
  updateAssignment,
};