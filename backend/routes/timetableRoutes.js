console.log("Timetable routes loaded ✅");

const express = require("express");
const router = express.Router();

const {
  addClass,
  getClasses,
  deleteClass,
} = require(
  "../controllers/TimetableController"
);

router.post("/", addClass);
router.get("/", getClasses);
router.delete("/:id", deleteClass);

module.exports = router;