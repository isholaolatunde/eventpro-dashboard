"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/utils/formatCurrency";
import type { Transaction, TransactionFilter, SortDirection } from "@/types/transaction";

const statusStyles: Record<string, string> = {
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  failed: "bg-rose-50 text-rose-700 ring-rose-200",
};

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [filter, setFilter] = useState<TransactionFilter>("all");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const filteredData = useMemo(() => {
    const filtered =
      filter === "all"
        ? transactions
        : transactions.filter((tx) => tx.status === filter);

    return [...filtered].sort((a, b) => {
      const dateA = Date.parse(a.date);
      const dateB = Date.parse(b.date);

      if (Number.isNaN(dateA)) return 1;
      if (Number.isNaN(dateB)) return -1;

      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [filter, sortDirection, transactions]);

  const toggleDateSort = () => {
    setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-200">
      <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Recent transactions
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Showing {filteredData.length} of {transactions.length} records
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter transactions"
        >
          {(["all", "completed", "pending", "failed"] as const).map((option) => {
            const isActive = filter === option;
            const label = option.charAt(0).toUpperCase() + option.slice(1);

            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={isActive}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Currency</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">
                <button
                  type="button"
                  onClick={toggleDateSort}
                  className="inline-flex items-center gap-1 rounded-md transition-colors hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label={`Sort by date ${
                    sortDirection === "desc" ? "oldest first" : "newest first"
                  }`}
                >
                  Date
                  <span aria-hidden="true">
                    {sortDirection === "desc" ? "↓" : "↑"}
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredData.length > 0 ? (
              filteredData.map((tx) => (
                <tr
                  key={tx.id}
                  className="transition-colors hover:bg-slate-50/60"
                >
                  <td className="px-6 py-4 font-medium text-slate-800">
                    {tx.customer ?? "Event customer"}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {formatCurrency(tx.amount, tx.currency)}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{tx.currency}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${
                        statusStyles[tx.status] ??
                        "bg-slate-100 text-slate-600 ring-slate-200"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="1" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                      No transactions found
                    </p>
                    <p className="text-xs text-slate-400">
                      {filter === "all"
                        ? "There are no transactions yet."
                        : `No ${filter} transactions match your filters.`}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
