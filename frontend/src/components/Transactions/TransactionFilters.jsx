export default function TransactionFilters({
  search,
  setSearch,
  category,
  setCategory,
  type,
  setType,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-wrap gap-4">

      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 flex-1"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Salary">Salary</option>
        <option value="Others">Others</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="All">All Types</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

    </div>
  );
}