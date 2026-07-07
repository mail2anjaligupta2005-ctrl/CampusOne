import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCard from "../components/cards/StatsCard";
import AttendanceChart from "../components/cards/AttendanceChart";
import ProgressWidget from "../components/cards/ProgressWidget";
import TodayClasses from "../components/cards/TodayClasses";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="p-6 grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Attendance"
          value="85%"
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
          value="3"
          color="text-red-600"
          icon="📝"
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

    </DashboardLayout>
  );
}

export default Dashboard;
