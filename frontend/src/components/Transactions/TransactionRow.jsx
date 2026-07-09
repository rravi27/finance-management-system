export default function TransactionRow({
  transaction,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">{transaction.date}</td>

      <td className="p-4">{transaction.title}</td>

      <td className="p-4">{transaction.category}</td>

      <td
        className={`p-4 font-semibold ${
          transaction.type === "Income"
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {transaction.type === "Income" ? "+" : "-"}₹
        {transaction.amount}
      </td>

      <td className="p-4 space-x-3">

        <button
          onClick={() => onEdit(transaction)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(transaction.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>

      </td>

    </tr>
  );
}