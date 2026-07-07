console.log("Assignment routes loaded ✅");
console.log(
  "Assignment routes file loaded:",
  __filename
);

const express = require("express");
const router = express.Router();

const {
  addAssignment,
  getAssignments,
  deleteAssignment,
  updateAssignment,
} = require("../controllers/assignmentController");

router.get("/test", (req, res) => {
  res.json({
    message: "Assignment routes working",
  });
});

router.put("/test-put", (req, res) => {
  console.log("TEST PUT HIT");
  res.json({
    message: "PUT route works",
  });
});

router.post("/", addAssignment);
router.get("/", getAssignments);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);

module.exports = router;