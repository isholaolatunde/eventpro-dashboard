export const getDashboardStats = async () => {
  return Promise.resolve({
    revenue: 12500,
    transactions: 320,
    customers: 85,
  });
};

export const getTransactions = async () => {
  return Promise.resolve([
    {
      id: 1,
      customer: "Ishola Taofiq",
      amount: 250,
      currency: "USD",
      status: "completed",
      date: "2026-01-10",
    },
    {
      id: 2,
      customer: "Jane Omar",
      amount: 180,
      currency: "GBP",
      status: "pending",
      date: "2026-01-11",
    },
    {
      id: 3,
      customer: "John Shawn",
      amount: 500,
      currency: "USD",
      status: "failed",
      date: "2026-01-12",
    },
  ]);
};

export const getCustomers = async () => {
  return Promise.resolve([
    { id: 1, name: "Ishola Taofiq", email: "ishola@example.com", status: "active" },
    { id: 2, name: "Jane Omar", email: "jane@example.com", status: "inactive" },
    { id: 3, name: "John Shawn", email: "john@example.com", status: "active" },
  ]);
};

export const getAnalytics = async () => {
  return Promise.resolve({
    revenueData: [
      { date: "Jan", revenue: 4000 },
      { date: "Feb", revenue: 3000 },
      { date: "Mar", revenue: 5000 },
      { date: "Apr", revenue: 4500 },
    ],
    transactionStatus: [
      { name: "Completed", value: 240 },
      { name: "Pending", value: 80 },
      { name: "Failed", value: 20 },
    ],
  });
};