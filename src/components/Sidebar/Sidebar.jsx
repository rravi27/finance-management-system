import {
  FaHome,
  FaExchangeAlt,
  FaTags,
  FaWallet,
  FaChartBar,
  FaRobot,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaHome />, text: "Dashboard" },
  { icon: <FaExchangeAlt />, text: "Transactions" },
  { icon: <FaTags />, text: "Categories" },
  { icon: <FaWallet />, text: "Budgets" },
  { icon: <FaChartBar />, text: "Reports" },
  { icon: <FaRobot />, text: "AI Insights" },
  { icon: <FaCog />, text: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col">

      {/* Logo */}
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        💰 FinanceAI
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">

        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer mb-2 transition
            ${
              index === 0
                ? "bg-teal-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon}

            <span>{item.text}</span>
          </div>
        ))}

      </nav>

    </aside>
  );
}