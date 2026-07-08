import { budgets } from "../../data/budgetData";
import BudgetCard from "./BudgetCard";

export default function BudgetProgress() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-6">
        Budget Progress
      </h2>

      {budgets.map((budget) => (
        <BudgetCard
          key={budget.id}
          {...budget}
        />
      ))}

    </div>
  );
}