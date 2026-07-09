import { useState, useEffect } from "react";

export default function AddTransactionModal({
  isOpen,
  onClose,
  onSave,
  transaction,
}) {
  const emptyForm = {
    title: "",
    amount: "",
    category: "Food",
    type: "Expense",
    date: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (transaction) {
      setFormData(transaction);
    } else {
      setFormData(emptyForm);
    }
  }, [transaction, isOpen]);

  if (!isOpen) return null;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: transaction ? transaction.id : Date.now(),
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      type: formData.type,
      date: formData.date,
    };

    onSave(newTransaction);

    setFormData(emptyForm);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-[450px] shadow-xl">
        <h2 className="text-2xl font-bold mb-5">
          {transaction ? "Edit Transaction" : "Add Transaction"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Transaction Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Food</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Travel</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Others</option>
          </select>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Expense</option>
            <option>Income</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
            >
              {transaction ? "Update" : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}