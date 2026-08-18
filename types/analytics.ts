export interface RevenueDataPoint {
  date: string;
  revenue: number;
}

export interface TransactionStatusPoint {
  name: string;
  value: number;
}

export interface AnalyticsData {
  revenueData: RevenueDataPoint[];
  transactionStatus: TransactionStatusPoint[];
}
