import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import toast from "react-hot-toast";
import {
  getAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} from "../services/assignmentService";

function Assignments() {
  const [assignments, setAssignments] =
    useState([]);

  const [title, setTitle] = useState("");
  const [subject, setSubject] =
    useState("");
  const [dueDate, setDueDate] =
    useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAssignment({
        title,
        subject,
        dueDate,
      });
      toast.success(
  "Assignment added successfully!"
);

      setTitle("");
      setSubject("");
      setDueDate("");

      fetchAssignments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
  try {
    await deleteAssignment(id);
    fetchAssignments();
  } catch (error) {
    console.log(error);
  }
};

const handleComplete = async (
  id,
  status
) => {
  try {
    await updateAssignment(id, {
      status:
        status === "Completed"
          ? "Pending"
          : "Completed",
    });

    fetchAssignments();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          📝 Assignment Manager
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-6"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Assignment Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="border p-3 rounded-lg"
              required
            />

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
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(e.target.value)
              }
              className="border p-3 rounded-lg"
              required
            />
          </div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
          >
            Add Assignment
          </button>
        </form>

        <div className="space-y-4">
          {assignments.map((item) => (
            <div
              key={item._id}
              className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p>{item.subject}</p>

                <p className="text-gray-500">
                  Due:
                  {" "}
                  {new Date(
                    item.dueDate
                  ).toLocaleDateString()}
                </p>
                <p
                  className={`font-semibold ${
                    item.status === "Completed"
                       ? "text-green-600"
                       : "text-orange-500"
                 }`}
              >
                {item.status}
               </p>
              </div>

              <div className="flex gap-3">
  <button
    onClick={() =>
      handleComplete(
        item._id,
        item.status
      )
    }
    className={`px-4 py-2 rounded-lg text-white ${
      item.status === "Completed"
        ? "bg-yellow-500"
        : "bg-green-500"
    }`}
  >
    {item.status === "Completed"
      ? "Undo"
      : "Complete"}
  </button>

  <button
    onClick={() =>
      handleDelete(item._id)
    }
    className="bg-red-500 text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>
</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Assignments;