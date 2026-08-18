"use client";

import { useAuth } from "@/context/AuthContext";
import { useDashboard } from "@/hooks/useDashboard";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { DashboardStatsCards } from "@/components/dashboard/DashboardStatsCards";
import { RecentEventsTable } from "@/components/dashboard/RecentEventsTable";

export default function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.email.split("@")[0] ?? "there";
  const { data, isLoading } = useDashboard();

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome back, <span className="capitalize">{firstName}</span> 👋
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s what&apos;s happening with your events today.
        </p>
      </div>
      <DashboardStatsCards data={data} />
      <RecentEventsTable />
    </div>
  );
}
