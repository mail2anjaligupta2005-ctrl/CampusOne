function TodayClasses() {
  const classes = [
    {
      subject: "Data Structures",
      time: "9:00 AM - 10:00 AM",
    },
    {
      subject: "DBMS",
      time: "11:00 AM - 12:00 PM",
    },
    {
      subject: "Web Development",
      time: "2:00 PM - 3:00 PM",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        📅 Today's Classes
      </h2>

      <div className="space-y-4">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">
                {cls.subject}
              </h3>

              <p className="text-gray-500">
                {cls.time}
              </p>
            </div>

            <span className="text-2xl">
              📚
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayClasses;