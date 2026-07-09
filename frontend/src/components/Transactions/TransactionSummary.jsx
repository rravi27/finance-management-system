export default function TransactionSummary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

      {/* Income */}
      <div className="bg-green-500 text-white rounded-xl p-5 shadow">
        <p className="text-sm opacity-90">Total Income</p>
        <h2 className="text-3xl font-bold mt-2">
          ₹{income.toLocaleString()}
        </h2>
      </div>

      {/* Expense */}
      <div className="bg-red-500 text-white rounded-xl p-5 shadow">
        <p className="text-sm opacity-90">Total Expense</p>
        <h2 className="text-3xl font-bold mt-2">
          ₹{expense.toLocaleString()}
        </h2>
      </div>

      {/* Balance */}
      <div className="bg-blue-600 text-white rounded-xl p-5 shadow">
        <p className="text-sm opacity-90">Current Balance</p>
        <h2 className="text-3xl font-bold mt-2">
          ₹{balance.toLocaleString()}
        </h2>
      </div>

      {/* Total */}
      <div className="bg-purple-600 text-white rounded-xl p-5 shadow">
        <p className="text-sm opacity-90">Transactions</p>
        <h2 className="text-3xl font-bold mt-2">
          {transactions.length}
        </h2>
      </div>

    </div>
  );
}