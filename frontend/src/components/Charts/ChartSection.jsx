import IncomeExpenseChart from "./IncomeExpenseChart";
import ExpensePieChart from "./ExpensePieChart";
import ExpensePredictionChart from "./ExpensePredictionChart";

export default function ChartSection() {
  return (
    <div className="mt-8">

      <div className="grid grid-cols-2 gap-6">

        <IncomeExpenseChart />

        <ExpensePieChart />

      </div>

      <div className="mt-6">

        <ExpensePredictionChart />

      </div>

    </div>
  );
}