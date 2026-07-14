console.log("THIS SERVER FILE IS RUNNING");
console.log(__filename);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
dotenv.config();
connectDB();
const assignmentRoutes = require(
  "./routes/assignmentRoutes"
);
const timetableRoutes = require(
  "./routes/timetableRoutes"
);
const aiRoutes = require("./routes/aiRoutes");
console.log(
  "Timetable routes file:",
  require.resolve(
    "./routes/timetableRoutes"
  )
);

console.log("Assignment routes object:", assignmentRoutes);
console.log("SERVER UPDATED 12345");

const app = express();
console.log(__filename);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use(
  "/api/assignments",
  assignmentRoutes
);
console.log(
  "Registering timetable routes..."
);
app.use(
  "/api/timetable",
  timetableRoutes
);

app.use("/api/ai", aiRoutes);

app.get("/test-timetable", (req, res) => {
  res.json({
    message: "Test timetable works",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello route works",
  });
});

app.get("/", (req, res) => {
  res.send("CampusOne Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});