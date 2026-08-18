interface CustomerStatsCardsProps {
  total: number;
  activeCount: number;
  pendingCount: number;
}

export function CustomerStatsCards({
  total,
  activeCount,
  pendingCount,
}: CustomerStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">Total customers</p>
        <p className="mt-3 text-3xl font-bold text-slate-800">{total}</p>
      </div>

      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">Active</p>
        <p className="mt-3 text-3xl font-bold text-emerald-600">{activeCount}</p>
      </div>

      <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">Pending</p>
        <p className="mt-3 text-3xl font-bold text-amber-600">{pendingCount}</p>
      </div>
    </div>
  );
}
