function StatsCard({
  title,
  value,
  color,
  icon,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="text-4xl">
          {icon}
        </span>
      </div>

      <p
        className={`text-5xl mt-6 font-bold ${color}`}
      >
        {value}
      </p>

    </div>
  );
}

export default StatsCard;