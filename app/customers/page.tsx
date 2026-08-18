"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useCustomers } from "@/hooks/useCustomers";
import { CustomerError } from "@/components/customers/CustomerError";
import { CustomerSkeleton } from "@/components/customers/CustomerSkeleton";
import { CustomerStatsCards } from "@/components/customers/CustomerStatsCards";
import { CustomerTable } from "@/components/customers/CustomerTable";

export default function CustomersPage() {
  const { data, isLoading, isError } = useCustomers();
  const customers = data ?? [];

  const activeCount = customers.filter(
    (customer) => customer.status?.toLowerCase() === "active",
  ).length;

  const pendingCount = customers.filter(
    (customer) => customer.status?.toLowerCase() === "pending",
  ).length;

  if (isError) return <CustomerError />;

  if (isLoading) {
    return (
      <ProtectedRoute>
        <CustomerSkeleton />
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Customers</h2>
          <p className="mt-1 text-sm text-slate-500">
            View and manage customers across your events.
          </p>
        </div>
        <CustomerStatsCards
          total={customers.length}
          activeCount={activeCount}
          pendingCount={pendingCount}
        />
        <CustomerTable customers={customers} />
      </div>
    </ProtectedRoute>
  );
}