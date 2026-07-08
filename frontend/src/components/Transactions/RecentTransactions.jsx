import { transactions } from "../../data/transactionData";
import TransactionCard from "./TransactionCard";

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between mb-5">

        <h2 className="text-xl font-bold">
          Recent Transactions
        </h2>

        <button className="text-teal-600">
          View All
        </button>

      </div>

      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          {...transaction}
        />
      ))}

    </div>
  );
}