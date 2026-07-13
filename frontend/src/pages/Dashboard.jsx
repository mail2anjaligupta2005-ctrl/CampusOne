import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCard from "../components/cards/StatsCard";
import AttendanceChart from "../components/cards/AttendanceChart";
import ProgressWidget from "../components/cards/ProgressWidget";
import TodayClasses from "../components/cards/TodayClasses";
import UpcomingDeadlines from "../components/cards/UpcomingDeadlines";
import WeeklyActivityChart from "../components/cards/WeeklyActivityChart";
import SubjectPerformance from "../components/cards/SubjectPerformance";
import { useEffect, useState } from "react";
import { getAssignments } from "../services/assignmentService";
import { getAttendance } from "../services/attendanceService";
import Notifications from "../components/cards/Notifications";

function Dashboard() {
  const navigate = useNavigate();

  const [assignments, setAssignments] =
  useState([]);

  const [attendance, setAttendance] =
  useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
  if (
    "Notification" in window &&
    Notification.permission !==
      "granted"
  ) {
    Notification.requestPermission();
  }
}, []);

useEffect(() => {
  if (Notification.permission === "granted") {
    new Notification("CampusOne", {
      body: "Notifications are working! 🎉",
    });
  }
}, []);

  useEffect(() => {
  fetchDashboardData();
}, []);

const fetchDashboardData = async () => {
  try {
    const assignmentRes =
      await getAssignments();

    const attendanceRes =
      await getAttendance();

    setAssignments(
      assignmentRes.data
    );

    setAttendance(
      attendanceRes.data
    );
  } catch (error) {
    console.log(error);
  }
};

const completedAssignments =
  assignments.filter(
    (a) =>
      a.status === "Completed"
  ).length;

const pendingAssignments =
  assignments.filter(
    (a) =>
      a.status === "Pending"
  ).length;
  const studyStreak =
  attendance.length * 3;
  const assignmentCompletion =
  assignments.length > 0
    ? (
        (completedAssignments /
          assignments.length) *
        100
      ).toFixed(0)
    : 0;

  const averageAttendance =
  attendance.length > 0
    ? (
        attendance.reduce(
          (sum, item) =>
            sum +
            (item.attendedClasses /
              item.totalClasses) *
              100,
          0
        ) / attendance.length
      ).toFixed(1)
    : 0;

  return (
    <DashboardLayout>
      <div className="p-6 grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Attendance"
          value={`${averageAttendance}%`}
          color="text-blue-600"
          icon="📚"
        />

        <StatsCard
          title="GPA"
          value="8.23"
          color="text-green-600"
          icon="🎓"
        />

        <StatsCard
          title="Assignments"
          value={assignments.length}
          color="text-red-600"
          icon="📝"
        />
        <StatsCard
          title="Completed"
          value={completedAssignments}
          color="text-green-600"
          icon="✅"
        />

      <StatsCard
        title="Pending"
        value={pendingAssignments}
        color="text-orange-500"
        icon="⏳"
      />

      <StatsCard
  title="Study Streak"
  value={`${studyStreak} Days`}
  color="text-purple-600"
  icon="🔥"
/> 
<StatsCard
  title="Completion"
  value={`${assignmentCompletion}%`}
  color="text-indigo-600"
  icon="📊"
/>
      </div>


      <div className="px-6 pb-6">
        <AttendanceChart />
      </div>
      <div className="px-6 pb-6">
  <WeeklyActivityChart />
</div>
<div className="px-6 pb-6">
  <SubjectPerformance />
</div>
      <div className="px-6 pb-6">
  <div className="bg-white rounded-2xl shadow p-6">
<div className="px-6 pb-6">
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow p-6">

    <h2 className="text-2xl font-bold mb-5">
      🤖 AI Study Insights
    </h2>

    <div className="space-y-3">

      <p>
        {averageAttendance >= 75
          ? "✅ Great! Your attendance is above 75%."
          : "⚠️ Your attendance is below 75%. Try attending more classes."}
      </p>

      <p>
        {pendingAssignments > 0
          ? `📚 You have ${pendingAssignments} pending assignment(s). Try completing them this week.`
          : "🎉 Excellent! No pending assignments."}
      </p>

      <p>
        🔥 Current Study Streak: <strong>{studyStreak} Days</strong>
      </p>

      <p>
        🎯 Keep your GPA above <strong>8.5</strong> for excellent academic performance.
      </p>

    </div>

  </div>
</div>
    <h2 className="text-2xl font-bold mb-6">
      📊 Analytics Overview
    </h2>

    <div className="space-y-6">

      <div>
        <div className="flex justify-between mb-2">
          <span>Attendance</span>
          <span>{averageAttendance}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${averageAttendance}%`,
            }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>Assignment Completion</span>
          <span>{assignmentCompletion}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{
              width: `${assignmentCompletion}%`,
            }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>GPA Goal</span>
          <span>8.23 / 10</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-purple-600 h-3 rounded-full"
            style={{
              width: "82%"
            }}
          />
        </div>
      </div>

    </div>
  </div>
</div>

      <div className="px-6 pb-6">
        <ProgressWidget />
      </div>

      <div className="px-6 pb-6">
        <TodayClasses />
      </div>

      <div className="px-6 pb-6">
       <UpcomingDeadlines
          assignments={assignments}
       />

       <div className="px-6 pb-6">
         <Notifications
           assignments={assignments}
           attendance={attendance}
         />
       </div>
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;
