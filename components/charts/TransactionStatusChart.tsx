import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import type { TransactionStatusPoint } from "@/types/analytics";

interface TransactionStatusChartProps {
  data: TransactionStatusPoint[];
}

export function TransactionStatusChart({ data }: TransactionStatusChartProps) {
  return (
    <div className="min-w-0 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
      <h2 className="mb-4 font-semibold text-slate-800">Transactions by Status</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
