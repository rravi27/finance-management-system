import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import SummaryCards from "../../components/Cards/SummaryCards";
import QuickActions from "../../components/QuickActions/QuickActions";
import RecentTransactions from "../../components/Transactions/RecentTransactions";
import BudgetProgress from "../../components/Budget/BudgetProgress";
import ChartSection from "../../components/Charts/ChartSection";

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

          <QuickActions />

          <div className="grid grid-cols-3 gap-6 mt-8">

          <div className="col-span-2">

            <RecentTransactions />

        </div>

        <BudgetProgress />

  </div>

  <div className="mt-8">
    <ChartSection />
</div>

        </main>

      </div>

    </div>
  );
}