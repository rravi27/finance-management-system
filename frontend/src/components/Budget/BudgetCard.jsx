export default function BudgetCard({
  title,
  spent,
  total,
  color,
}) {

  const percentage = (spent / total) * 100;

  return (

    <div className="mb-6">

      <div className="flex justify-between mb-2">

        <h3 className="font-semibold">
          {title}
        </h3>

        <span>
          ₹{spent} / ₹{total}
        </span>

      </div>

      <div className="bg-gray-200 h-3 rounded-full">

        <div
          className={`${color} h-3 rounded-full`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>

  );
}