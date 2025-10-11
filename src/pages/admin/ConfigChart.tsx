"use client";

// import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend,
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "./Chart";

import { PropagateLoader } from "react-spinners";
import { useAllUsersQuery, useAllUsersTransactionsQuery } from "@/redux/features/user/user.api";

// Sample data

// Chart config (label, color, etc.)
const chartConfig = {
   income: {
      label: "Total Amount",
      color: "hsl(140, 70%, 50%)",
   },
   totalFees: {
      label: "Total Fees",
      color: "hsl(240, 70%, 50%)",
   },
   expense: {
      label: "Transaction",
      color: "hsl(50, 70%, 30%)",
   },
   totalCommission: {
      label: "TotalCommission",
      color: "hsl(0, 100%, 50%)",
   },
   averageAmount: {
      label: "AverageAmount",
      color: "hsl(278, 100%, 62%)",
   },
};

export default function ConfigChart() {
   const { data: AllTransactions, isLoading } = useAllUsersTransactionsQuery(undefined);
   const { data: AllUsers } = useAllUsersQuery(undefined);
   // const { data: allUsers, isLoading } = useGetTransactionQuery(undefined);
   // const {data: AllTransaction} =
   console.log(AllUsers);
   console.log(AllTransactions?.summary, "AllTransactions");
   const data = [
      // { users: allUsers?.meta.total, income: allUsers?.meta.total, expense: 2400 },
      { users: AllUsers?.meta?.total },
      { income: AllTransactions?.summary?.totalAmount },
      { totalCommission: AllTransactions?.summary?.totalCommission },
      { totalFees: AllTransactions?.summary?.totalFees },
      { expense: AllTransactions?.summary?.transactionCount },
      { averageAmount: AllTransactions?.summary?.averageAmount },
      // { month: "Mar", income: 2000, expense: 9800 },
      // { month: "Apr", income: 2780, expense: 3908 },
   ];

   if (isLoading) {
      return (
         <div className=" flex justify-center items-center py-8 w-full space-y-10 ">
            <PropagateLoader size={16} color="#181EA1" />
         </div>
      );
   }
   // console.log("all users", income)
   // console.log("All Transactions", AllTransactions);
   return (
      <ChartContainer config={chartConfig} className="w-full h-[400px] ">
         <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="users" />
            <XAxis dataKey="results" />
            <YAxis dataKey="income" />
            <YAxis dataKey="totalCommission" />
            <YAxis dataKey="totalFees" />
            <YAxis dataKey="expense" />
            <YAxis />

            {/* Tooltip */}
            <ChartTooltip content={<ChartTooltipContent />} />

            {/* Legend */}
            <ChartLegend content={<ChartLegendContent />} />

            {/* Bars */}
            <Bar dataKey="users" fill="var(--color-income)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="income" fill="var(--color-income)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="totalCommission" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="totalFees" fill="var(--color-totalFees)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="averageAmount" fill="var(--color-expense)" radius={[6, 6, 0, 0]} />
         </BarChart>
      </ChartContainer>
   );
}
