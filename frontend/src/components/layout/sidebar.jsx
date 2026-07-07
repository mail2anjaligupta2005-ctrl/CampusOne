import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard" },
    { name: "Attendance", icon: "📚", path: "/attendance" },
    { name: "Assignments", icon: "📝", path: "/assignments" },
    { name: "Timetable", icon: "📅", path: "/timetable" },
    { name: "AI Planner", icon: "🤖", path: "/ai-planner" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <div className="w-72 bg-blue-700 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-12">
        CampusOne
      </h1>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-4 rounded-xl transition ${
              location.pathname === item.path
                ? "bg-blue-500"
                : "hover:bg-blue-600"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;