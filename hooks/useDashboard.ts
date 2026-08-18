import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/services/api";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });
};