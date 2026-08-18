export interface Transaction {
  id: number;
  customer: string | null;
  amount: number;
  currency: string;
  status: string;
  date: string;
}

export type TransactionFilter = "all" | "completed" | "pending" | "failed";
export type SortDirection = "asc" | "desc";
