function UpcomingDeadlines({
  assignments = [],
}) {
  const deadlines = assignments
  .filter(
    (item) =>
      item.status !== "Completed"
  )
  .slice(0, 5);

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
              {item.title}
            </span>

<span className="text-red-500 font-semibold">
  {new Date(
    item.dueDate
  ).toLocaleDateString()}
</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingDeadlines;
