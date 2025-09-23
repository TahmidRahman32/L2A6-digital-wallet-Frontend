import { PropagateLoader } from "react-spinners";
import { formatDate } from "date-fns";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllUsersTransactionsQuery } from "@/redux/features/user/user.api";
type IUserRef = {
   _id: string;
   phone: string;
   role?: string;
};

export interface ITransaction {
   _id: string;
   amount: number;
   fee: number;
   description: string;
   type: "withdraw" | "deposit" | "transfer";
   status: "pending" | "completed" | "failed";
   from: IUserRef;
   initiatedBy: IUserRef;
   createdAt: string;
   updatedAt: string;
}

export const allTransactions = () => {
   const { data, isLoading } = useAllUsersTransactionsQuery(undefined, {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
   });

   const transactionsData = data?.data.transactions;
   return (
      <div>
         <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="">transactions</TableHead>
                  <TableHead>Form Number</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Transaction free</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading ? (
                  <div className=" flex justify-center items-center py-8 w-full space-y-10">
                     <PropagateLoader size={16} color="#181EA1" />
                  </div>
               ) : (
                  transactionsData?.map((transaction: ITransaction, index: number) => {
                     return (
                        <TableRow key={index} className="md:space-y-3">
                           <TableCell>{transaction.initiatedBy.role}</TableCell>
                           <TableCell>{transaction.from?.phone ? transaction.from?.phone : "Not"}</TableCell>
                           <TableCell>{transaction?.amount ? transaction?.amount : "Not Amount"}</TableCell>
                           <TableCell>{transaction.fee}</TableCell>
                           <TableCell>{transaction.type}</TableCell>
                           <TableCell>{formatDate(transaction.createdAt, "PPP")}</TableCell>
                           <TableCell className="uppercase">{transaction.status}</TableCell>
                        </TableRow>
                     );
                  })
               )}
            </TableBody>
         </Table>
      </div>
   );
};
