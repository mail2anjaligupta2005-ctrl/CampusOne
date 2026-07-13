import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SubjectPerformance() {
  const data = [
    { subject: "DBMS", score: 92 },
    { subject: "OS", score: 80 },
    { subject: "DAA", score: 75 },
    { subject: "CN", score: 88 },
    { subject: "Python", score: 95 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-6">
        📚 Subject Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={data}>
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="score"
            fill="#16a34a"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SubjectPerformance;