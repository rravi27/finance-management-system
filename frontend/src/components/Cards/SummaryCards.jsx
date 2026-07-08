import SummaryCard from "./SummaryCard";
import { summaryCards } from "../../data/dashboardData";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {summaryCards.map((card) => (
        <SummaryCard
          key={card.id}
          {...card}
        />
      ))}
    </div>
  );
}