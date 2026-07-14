import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100">
        <Navbar />

        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;