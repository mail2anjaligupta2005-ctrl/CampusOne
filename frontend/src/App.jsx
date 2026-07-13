import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";
import AIPlanner from "./pages/AIPlanner";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  useEffect(() => {
  const darkMode = JSON.parse(
    localStorage.getItem("darkMode")
  );

  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, []);
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
  path="/ai-assistant"
  element={<AIAssistant />}
/>

         <Route
  path="/profile"
  element={<Profile />}
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