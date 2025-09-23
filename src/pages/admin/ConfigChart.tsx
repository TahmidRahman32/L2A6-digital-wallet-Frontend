"use client";

// import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend,
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./Chart";

import { PropagateLoader } from "react-spinners";
import { useAllUsersTransactionsQuery } from "@/redux/features/user/user.api";


// Sample data

// Chart config (label, color, etc.)
const chartConfig = {
   income: {
      label: "Results",
      color: "hsl(140, 70%, 50%)", // সবুজ
   },
   expense: {
      label: "Transaction",
      color: "hsl(50, 70%, 30%)",
   },
   totalCommission: {
      label: "TotalCommission",
      color: "hsl(10, 70%, 50%)",
   },
   averageAmount: {
      label: "AverageAmount",
      color: "hsl(280, 70%, 80%)",
   },
};

export default function ConfigChart() {
   const { data: AllTransactions, isLoading } = useAllUsersTransactionsQuery(undefined);
   // const { data: allUsers, isLoading } = useGetTransactionQuery(undefined);
   // const {data: AllTransaction} =
     console.log(AllTransactions);
   const data = [
      // { users: allUsers?.meta.total, income: allUsers?.meta.total, expense: 2400 },
      { results: AllTransactions?.results },
      { income: AllTransactions?.summary?.totalAmount },
      { totalCommission: AllTransactions?.summary?.totalCommission },
      { expense: AllTransactions?.summary?.transactionCount },
      { averageAmount: AllTransactions?.summary?.averageAmount },
      // { month: "Mar", income: 2000, expense: 9800 },
      // { month: "Apr", income: 2780, expense: 3908 },
   ];
 

   if (isLoading) {
      return (
         <div className=" flex justify-center items-center py-8 w-full space-y-10">
            <PropagateLoader size={16} color="#181EA1" />
         </div>
      );
   }
   // console.log("all users", income)
   // console.log("All Transactions", AllTransactions);
   return (
      <ChartContainer config={chartConfig} className="w-full h-[400px]">
         <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="results" />
            <YAxis dataKey="income" />
            <YAxis dataKey="totalCommission" />
            <YAxis dataKey="expense" />
            <YAxis />

            {/* Tooltip */}
            <ChartTooltip content={<ChartTooltipContent />} />

            {/* Legend */}
            <ChartLegend content={<ChartLegendContent />} />

            {/* Bars */}
            <Bar dataKey="income" fill="var(--color-income)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="totalCommission" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="averageAmount" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
         </BarChart>
      </ChartContainer>
   );
}
