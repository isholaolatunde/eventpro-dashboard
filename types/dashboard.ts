export interface DashboardStats {
  revenue: number;
  transactions: number;
  customers: number;
}

export interface RecentEvent {
  name: string;
  date: string;
  tickets: string;
  revenue: string;
  status: string;
}
