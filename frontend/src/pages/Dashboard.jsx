import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCard from "../components/cards/StatsCard";
import AttendanceChart from "../components/cards/AttendanceChart";
import ProgressWidget from "../components/cards/ProgressWidget";
import TodayClasses from "../components/cards/TodayClasses";
import UpcomingDeadlines from "../components/cards/UpcomingDeadlines";
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
      </div>

      <div className="px-6 pb-6">
        <AttendanceChart />
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
