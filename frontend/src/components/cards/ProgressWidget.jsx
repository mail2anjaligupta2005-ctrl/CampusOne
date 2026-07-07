function ProgressWidget() {
  const progress = 80;

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        🎯 Semester Progress
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-blue-600 h-6 rounded-full flex items-center justify-center text-white text-sm"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <p className="mt-4 text-gray-600">
        You have completed 80% of the semester goals.
      </p>
    </div>
  );
}

export default ProgressWidget;