import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "@/services/api";

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });
};