import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">

      {/* Search */}

      <div className="relative w-96">

        <FaSearch className="absolute top-4 left-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">

        <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
          📷 Scan Receipt
        </button>

        <FaBell className="text-xl cursor-pointer" />

        <div className="flex items-center gap-2 cursor-pointer">

          <FaUserCircle className="text-3xl" />

          <span>John Doe</span>

        </div>

      </div>

    </header>
  );
}