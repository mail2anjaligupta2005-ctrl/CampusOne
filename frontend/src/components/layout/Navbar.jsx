function Navbar() {
  return (
    <div className="bg-white px-8 py-4 shadow flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-5">
        <span className="text-2xl cursor-pointer">
          🔔
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </div>
  );
}

export default Navbar;