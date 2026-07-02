import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import SummaryCards from "../../components/Cards/SummaryCards";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main className="flex-1 p-6 overflow-y-auto">

          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <SummaryCards />

        </main>

      </div>

    </div>
  );
}