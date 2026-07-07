import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  getClasses,
  addClass,
  deleteClass,
} from "../services/timetableService";

function Timetable() {
  const [classes, setClasses] = useState([]);
  const [subject, setSubject] =
    useState("");
  const [time, setTime] =
    useState("");
    const handleDelete = async (id) => {
  try {
    await deleteClass(id);
    fetchClasses();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addClass({
      subject,
      time,
    });

    setSubject("");
    setTime("");

    fetchClasses();
  } catch (error) {
    console.log(error);
  }
};

  const fetchClasses = async () => {
    try {
      const res =
        await getClasses();
      setClasses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
  <h1 className="text-3xl font-bold mb-6">
    📅 Timetable Manager
  </h1>

  <form
    onSubmit={handleSubmit}
    className="bg-white p-6 rounded-xl shadow mb-6"
  >
    <div className="grid md:grid-cols-2 gap-4">
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
        type="text"
        placeholder="Time (9:00 AM - 10:00 AM)"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
        className="border p-3 rounded-lg"
        required
      />
    </div>

    <button
      className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
    >
      Add Class
    </button>
  </form>

<div className="space-y-4">
  {classes.map((item) => (
    <div
      key={item._id}
      className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-bold">
          {item.subject}
        </h2>

        <p className="text-gray-500">
          {item.time}
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

export default Timetable;