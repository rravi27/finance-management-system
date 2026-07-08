import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function TransactionCard({
  title,
  category,
  date,
  amount,
  income,
}) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition">

      <div className="flex items-center gap-4">

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white
          ${income ? "bg-green-500" : "bg-red-500"}`}
        >
          {income ? <FaArrowDown /> : <FaArrowUp />}
        </div>

        <div>
          <h3 className="font-semibold">{title}</h3>

          <p className="text-sm text-gray-500">
            {category}
          </p>
        </div>

      </div>

      <div className="text-right">

        <p
          className={`font-bold ${
            income ? "text-green-600" : "text-red-600"
          }`}
        >
          {income ? "+" : "-"}₹{amount}
        </p>

        <p className="text-sm text-gray-500">
          {date}
        </p>

      </div>

    </div>
  );
}