console.log("Attendance routes loaded ✅");

const express = require("express");
const router = express.Router();

const {
  addAttendance,
  getAttendance,
  deleteAttendance,
} = require("../controllers/AttendanceController");

router.get("/test", (req, res) => {
  res.json({
    message: "Attendance route working",
  });
});

router.post("/", addAttendance);
router.get("/", getAttendance);
router.delete("/:id", deleteAttendance);

module.exports = router;