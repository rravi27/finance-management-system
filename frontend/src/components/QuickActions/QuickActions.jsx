import { FaArrowDown, FaArrowUp, FaCamera } from "react-icons/fa";

export default function QuickActions() {
  const actions = [
    {
      title: "Add Income",
      icon: <FaArrowDown />,
      color: "bg-green-500",
    },
    {
      title: "Add Expense",
      icon: <FaArrowUp />,
      color: "bg-red-500",
    },
    {
      title: "Scan Receipt",
      icon: <FaCamera />,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-3 gap-6">
        {actions.map((action) => (
          <button
            key={action.title}
            className={`${action.color} text-white rounded-xl p-5 flex items-center justify-center gap-3 hover:scale-105 transition`}
          >
            {action.icon}
            <span className="font-semibold">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}