import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import toast from "react-hot-toast";
import { getAssignments } from "../services/assignmentService";

function AIPlanner() {
  const [assignments, setAssignments] =
    useState([]);

  const [studyPlan, setStudyPlan] =
    useState([]);

  const fetchAssignments =
    async () => {
      try {
        const res =
          await getAssignments();

        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const generatePlan = () => {
    const pendingAssignments =
      assignments.filter(
        (item) =>
          item.status !== "Completed"
      );

    const plan =
  pendingAssignments.map(
    (item, index) => {
      const dueDate =
        new Date(item.dueDate);

      const today =
        new Date();

      const diff =
        Math.ceil(
          (dueDate - today) /
            (1000 * 60 * 60 * 24)
        );

      let priority = "Low";

      if (diff <= 2) {
        priority = "High";
      } else if (diff <= 5) {
        priority = "Medium";
      }

      const timeSlots = [
        "09:00 AM - 10:30 AM",
        "02:00 PM - 03:30 PM",
        "08:00 PM - 09:00 PM",
      ];

      return {
        id: item._id,
        task: `Study ${item.subject} and complete "${item.title}"`,
        priority,
        time:
          timeSlots[
            index %
              timeSlots.length
          ],
      };
    }
  );
    setStudyPlan(plan);

    toast.success("Study Plan Generated Successfully! 🤖");
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          🤖 AI Study Planner
        </h1>

        <button
          onClick={generatePlan}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-6"
        >
          Generate Study Plan
        </button>

        <div className="space-y-4">
  {studyPlan.map((item) => (
    <div
      key={item.id}
      className="bg-white p-5 rounded-xl shadow"
    >
      <p className="font-semibold">
        ⏰ {item.time}
      </p>

      <p className="mt-2">
        📚 {item.task}
      </p>

      <div className="mt-3">
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
      item.priority === "High"
        ? "bg-red-500"
        : item.priority === "Medium"
        ? "bg-yellow-500"
        : "bg-green-500"
    }`}
  >
    {item.priority} Priority
  </span>
</div>
    </div>
  ))}
</div>
       </div>
    </DashboardLayout>
  );
}

export default AIPlanner;

        