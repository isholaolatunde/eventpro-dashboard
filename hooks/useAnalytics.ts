import { useQuery } from "@tanstack/react-query";
import { getAnalytics } from "@/services/api";

export const useAnalytics = () => {
  return useQuery({
    queryKey: ["analytics"],
    queryFn: getAnalytics,
  });
};