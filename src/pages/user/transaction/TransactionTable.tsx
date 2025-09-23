import { useGetTransactionQuery } from "@/redux/features/wallet/wallet.api";
import { PropagateLoader } from "react-spinners";
import { formatDate } from "date-fns";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

export const TransactionTable = () => {
   const { data, isLoading } = useGetTransactionQuery(undefined, {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
   });

   

   const transactionsData = data?.data?.transactions;

   console.log(transactionsData);

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
                           <TableCell>{transaction.from?.phone}</TableCell>
                           <TableCell>{transaction?.amount}</TableCell>
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
