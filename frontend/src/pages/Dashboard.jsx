import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

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
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Attendance
          </h2>

          <p className="text-4xl text-blue-600 mt-4">
            85%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            GPA
          </h2>

          <p className="text-4xl text-green-600 mt-4">
            8.23
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Assignments
          </h2>

          <p className="text-4xl text-red-600 mt-4">
            3
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;