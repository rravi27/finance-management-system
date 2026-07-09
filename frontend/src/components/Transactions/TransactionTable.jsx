import TransactionRow from "./TransactionRow";

export default function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
      <table className="w-full border-collapse">

        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center p-6 text-gray-500"
              >
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}