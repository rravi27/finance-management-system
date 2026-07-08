export default function SummaryCard({
  title,
  value,
  subtitle,
  valueColor,
  bgColor,
}) {
  return (
    <div
      className={`${bgColor} rounded-xl shadow p-6`}
    >
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className={`text-3xl font-bold mt-2 ${valueColor}`}>
        {value}
      </h2>

      <p className="text-gray-500 mt-3">
        {subtitle}
      </p>
    </div>
  );
}