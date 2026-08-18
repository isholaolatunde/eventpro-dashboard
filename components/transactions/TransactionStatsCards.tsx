import { formatCurrency } from "@/utils/formatCurrency";

interface TransactionStatsCardsProps {
  totalVolume: number;
  completedCount: number;
  pendingCount: number;
}

export function TransactionStatsCards({
  totalVolume,
  completedCount,
  pendingCount,
}: TransactionStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Total volume</p>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1v22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-3xl font-bold text-slate-800">
          {formatCurrency(totalVolume, "USD")}
        </p>
        <p className="mt-1 text-xs font-medium text-emerald-600">+12.4% this month</p>
      </div>

      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Completed</p>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5 9.5 17 19 7.5" />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-3xl font-bold text-slate-800">{completedCount}</p>
        <p className="mt-1 text-xs font-medium text-emerald-600">Healthy clearance rate</p>
      </div>

      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">Pending</p>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>
        <p className="mt-3 text-3xl font-bold text-slate-800">{pendingCount}</p>
        <p className="mt-1 text-xs font-medium text-amber-600">Needs review</p>
      </div>
    </div>
  );
}
