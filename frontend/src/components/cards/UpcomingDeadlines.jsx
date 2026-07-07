function UpcomingDeadlines() {
  const deadlines = [
    {
      task: "DBMS Assignment",
      due: "Tomorrow",
    },
    {
      task: "Web Project Submission",
      due: "3 Days Left",
    },
    {
      task: "IoT Lab Record",
      due: "1 Week Left",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        🔥 Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {deadlines.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border rounded-lg p-4"
          >
            <span className="font-medium">
              {item.task}
            </span>

            <span className="text-red-500 font-semibold">
              {item.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingDeadlines;
