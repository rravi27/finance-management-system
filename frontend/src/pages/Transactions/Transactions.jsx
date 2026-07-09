import { useState } from "react";
import TransactionTable from "../../components/Transactions/TransactionTable";
import AddTransactionModal from "../../components/Transactions/AddTransactionModal";
import TransactionFilters from "../../components/Transactions/TransactionFilters";
import TransactionSummary from "../../components/Transactions/TransactionSummary";
import { transactions as initialTransactions } from "../../data/transactionData";

export default function Transactions() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const [open, setOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  // Add or Update Transaction
  function handleAddOrUpdate(transaction) {
    if (editingTransaction) {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === transaction.id ? transaction : t
        )
      );
    } else {
      setTransactions((prev) => [...prev, transaction]);
    }

    setEditingTransaction(null);
    setOpen(false);
  }

  // Edit Transaction
  function handleEdit(transaction) {
    setEditingTransaction(transaction);
    setOpen(true);
  }

  // Delete Transaction
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (confirmDelete) {
      setTransactions((prev) =>
        prev.filter((t) => t.id !== id)
      );
    }
  }

  // Filter Transactions
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      transaction.category === category;

    const matchesType =
      type === "All" ||
      transaction.type === type;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType
    );
  });

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Transactions
        </h1>

        <button
          onClick={() => {
            setEditingTransaction(null);
            setOpen(true);
          }}
          className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700"
        >
          + Add Transaction
        </button>

      </div>

      {/* Summary Cards */}
      <TransactionSummary
        transactions={filteredTransactions}
      />

      {/* Search & Filters */}
      <TransactionFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
      />

      {/* Transaction Table */}
      <TransactionTable
        transactions={filteredTransactions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add / Edit Modal */}
      <AddTransactionModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          setEditingTransaction(null);
        }}
        onSave={handleAddOrUpdate}
        transaction={editingTransaction}
      />

    </div>
  );
}