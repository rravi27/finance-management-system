export default function SummaryCard({
  title,
  value,
  subtitle,
  valueColor = "text-black",
  bgColor = "bg-white",
}) {
  return (
    <div
      className={`${bgColor} rounded-xl shadow-sm border p-5 hover:shadow-md transition`}
    >
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h1 className={`text-3xl font-bold mt-2 ${valueColor}`}>
        {value}
      </h1>

      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
}