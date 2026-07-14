import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  getAttendance,
  addAttendance,
  deleteAttendance,
} from "../services/attendanceService";

function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const [subject, setSubject] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [totalClasses, setTotalClasses] = useState("");

  const fetchAttendance = async () => {
    try {
      const res = await getAttendance();
      setAttendance(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAttendance({
        subject,
        attendedClasses,
        totalClasses,
      });

      setSubject("");
      setAttendedClasses("");
      setTotalClasses("");

      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAttendance(id);
      fetchAttendance();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          📚 Attendance Manager
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-6"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="number"
              placeholder="Attended Classes"
              value={attendedClasses}
              onChange={(e) =>
                setAttendedClasses(e.target.value)
              }
              className="border p-3 rounded-lg"
              required
            />

            <input
              type="number"
              placeholder="Total Classes"
              value={totalClasses}
              onChange={(e) =>
                setTotalClasses(e.target.value)
              }
              className="border p-3 rounded-lg"
              required
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
          >
            Add Attendance
          </button>
        </form>

        <div className="space-y-4">
          {attendance.map((item) => (
            <div
              key={item._id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold">
                  {item.subject}
                </h2>

                <p>
                  {item.attendedClasses}/
                  {item.totalClasses}
                </p>

                <p className="text-blue-600 font-semibold">
                  {(
                    (item.attendedClasses /
                      item.totalClasses) *
                    100
                  ).toFixed(1)}
                  %
                </p>
              </div>

              <button
                onClick={() =>
                  handleDelete(item._id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Attendance;