"use client";

import { useMemo, useState } from "react";
import type { Customer } from "@/types/customer";

const statusStyles: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  inactive: "bg-slate-100 text-slate-600 ring-slate-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
};

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  const [search, setSearch] = useState("");

  const filteredCustomers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return customers;

    return customers.filter((customer) =>
      [customer.name, customer.email, customer.status].some((value) =>
        String(value ?? "").toLowerCase().includes(query),
      ),
    );
  }, [customers, search]);

  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-200">
      <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-800">
            Customer directory
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Showing {filteredCustomers.length} of {customers.length} customers
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search customers..."
            aria-label="Search customers"
            className="w-full rounded-lg border-0 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none ring-1 ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-150 text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => {
                const status = customer.status?.toLowerCase() ?? "unknown";

                return (
                  <tr
                    key={customer.id}
                    className="transition-colors hover:bg-slate-50/60"
                  >
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {customer.name || "Unnamed customer"}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {customer.email || "No email"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ${
                          statusStyles[status] ??
                          "bg-slate-100 text-slate-600 ring-slate-200"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-12 text-center text-sm text-slate-500"
                >
                  No customers match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
