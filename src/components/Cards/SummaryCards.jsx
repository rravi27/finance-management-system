import SummaryCard from "./SummaryCard";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-3 gap-6">

      <SummaryCard
        title="Total Balance"
        value="₹2,45,000"
        subtitle="+₹12,500 this month"
      />

      <SummaryCard
        title="Monthly Cashflow"
        value="₹48,000"
        subtitle="Income ₹70k • Expense ₹22k"
        valueColor="text-green-600"
      />

      <SummaryCard
        title="AI Smart Suggestion"
        value="💡"
        subtitle="You're spending more on food than usual."
        bgColor="bg-gradient-to-r from-cyan-50 to-purple-100"
      />

    </div>
  );
}