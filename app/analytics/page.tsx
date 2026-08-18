"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAnalytics } from "@/hooks/useAnalytics";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { TransactionStatusChart } from "@/components/charts/TransactionStatusChart";

export default function AnalyticsPage() {
  const { data, isLoading, isError } = useAnalytics();

  return (
    <ProtectedRoute>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Analytics</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p className="text-red-500">Something went wrong</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <RevenueChart data={data?.revenueData ?? []} />
            <TransactionStatusChart data={data?.transactionStatus ?? []} />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}