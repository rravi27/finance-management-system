import { NavLink } from "react-router-dom";

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
  { icon: <FaHome />, text: "Dashboard", path: "/" },
  { icon: <FaExchangeAlt />, text: "Transactions", path: "/transactions" },
  { icon: <FaTags />, text: "Categories", path: "/categories" },
  { icon: <FaWallet />, text: "Budgets", path: "/budgets" },
  { icon: <FaChartBar />, text: "Reports", path: "/reports" },
  { icon: <FaRobot />, text: "AI Insights", path: "/ai-insights" },
  { icon: <FaCog />, text: "Settings", path: "/settings" },
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
        <NavLink
        key={index}
        to={item.path}
        className={({ isActive }) =>
          `flex items-center gap-4 p-3 rounded-lg mb-2 transition ${
            isActive
              ? "bg-teal-600"
              : "hover:bg-slate-800"
          }`
        }
      >
        {item.icon}
        <span>{item.text}</span>
      </NavLink>
        ))}

      </nav>

    </aside>
  );
}