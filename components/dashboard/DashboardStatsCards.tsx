import type { DashboardStats } from "@/types/dashboard";

const statIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18" />
  </svg>
);

interface DashboardStatsCardsProps {
  data: DashboardStats | undefined;
}

export function DashboardStatsCards({ data }: DashboardStatsCardsProps) {
  const stats = [
    { label: "Revenue", value: `#${data?.revenue ?? "$0"}` },
    { label: "Transactions", value: data?.transactions ?? "$0" },
    { label: "Customers", value: data?.customers ?? "$0" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white">
              {statIcon}
            </div>
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">{stat.value}</p>
          <p className="mt-1 text-xs font-medium text-emerald-600">+5.4%</p>
        </div>
      ))}
    </div>
  );
}
