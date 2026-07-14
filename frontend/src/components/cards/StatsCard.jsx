function StatsCard({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          {title}
        </h2>

        <span className="text-4xl">
          {icon}
        </span>
      </div>

      <p className={`text-5xl font-bold mt-6 ${color}`}>
        {value}
      </p>

    </div>
  );
}

export default StatsCard;