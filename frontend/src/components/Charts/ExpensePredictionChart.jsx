import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { expensePredictionData } from "../../data/chartData";

export default function ExpensePredictionChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">
        AI Expense Prediction
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={expensePredictionData}>
          <defs>
            <linearGradient id="predictionColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="predicted"
            stroke="#06b6d4"
            strokeWidth={3}
            fill="url(#predictionColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}