"use client";

import { useTransactions } from "@/hooks/useTransactions";
import { TransactionError } from "@/components/transactions/TransactionError";
import { TransactionSkeleton } from "@/components/transactions/TransactionSkeleton";
import { TransactionStatsCards } from "@/components/transactions/TransactionStatsCards";
import { TransactionTable } from "@/components/transactions/TransactionTable";

export default function TransactionsPage() {
  const { data, isLoading, isError } = useTransactions();
  const transactions = data ?? [];

  const totalVolume = data?.reduce((sum, tx) => sum + tx.amount, 0) ?? 0;
  const completedCount = transactions.filter((tx) => tx.status === "completed").length;
  const pendingCount = transactions.filter((tx) => tx.status === "pending").length;

  if (isError) return <TransactionError />;
  if (isLoading) return <TransactionSkeleton />;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Transactions</h2>
        <p className="mt-1 text-sm text-slate-500">
          Review the latest payment activity across your events and customers.
        </p>
      </div>
      <TransactionStatsCards
        totalVolume={totalVolume}
        completedCount={completedCount}
        pendingCount={pendingCount}
      />
      <TransactionTable transactions={transactions} />
    </div>
  );
}