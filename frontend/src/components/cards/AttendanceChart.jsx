import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AttendanceChart() {
  const data = [
    { month: "Jan", attendance: 75 },
    { month: "Feb", attendance: 80 },
    { month: "Mar", attendance: 82 },
    { month: "Apr", attendance: 85 },
    { month: "May", attendance: 88 },
    { month: "Jun", attendance: 90 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        📈 Attendance Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceChart;