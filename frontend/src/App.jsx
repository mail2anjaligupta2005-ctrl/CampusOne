import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";
import AIPlanner from "./pages/AIPlanner";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/assignments"
          element={<Assignments />}
        />

        <Route
          path="/timetable"
          element={<Timetable />}
        />

        <Route
          path="/ai-planner"
          element={<AIPlanner />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;