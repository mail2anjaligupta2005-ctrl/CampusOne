import { showNotification } from "../../utils/showNotification";

function Notifications({
  assignments = [],
  attendance = [],
}) {

  const notifications =
    assignments.filter((item) => {
      const dueDate = new Date(item.dueDate);
      const today = new Date();

      const diff = Math.ceil(
        (dueDate - today) /
        (1000 * 60 * 60 * 24)
      );

      return (
        diff <= 2 &&
        item.status !== "Completed"
      );
    });

  notifications.forEach((item) => {
    showNotification(
      "Assignment Reminder",
      `${item.title} is due soon!`
    );
  });

  const lowAttendance =
    attendance.filter(
      (item) =>
        (item.attendedClasses /
          item.totalClasses) *
          100 <
        75
    );

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        🔔 Notifications
      </h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">
          No urgent notifications 🎉
        </p>
      ) : (
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item._id}
              className="border-l-4 border-red-500 bg-red-50 p-4 rounded"
            >
              ⚠️ {item.title} is due soon!
            </div>
          ))}
          {lowAttendance.map((item) => (
  <div
    key={item._id}
    className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded"
  >
    📚 {item.subject} attendance is below 75%.
  </div>
))}
        </div>
      )}
    </div>
  );
}

export default Notifications;