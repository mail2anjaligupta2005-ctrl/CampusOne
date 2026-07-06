function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-600 text-white p-5 shadow-md">
        <h1 className="text-3xl font-bold">
          CampusOne Dashboard
        </h1>
        <p className="text-blue-100">
          Welcome back, Anjali 👋
        </p>
      </div>

      <div className="p-6 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Attendance
          </h2>

          <p className="text-4xl text-blue-600 mt-4">
            85%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            GPA
          </h2>

          <p className="text-4xl text-green-600 mt-4">
            8.23
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">
            Assignments
          </h2>

          <p className="text-4xl text-red-600 mt-4">
            3
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;