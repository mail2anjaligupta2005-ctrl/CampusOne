import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatsCard from "../components/cards/StatsCard";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
    </DashboardLayout>
  );
}

export default Dashboard;