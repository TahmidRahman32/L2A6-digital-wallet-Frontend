import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllUsersQuery } from "@/redux/features/user/user.api";
import { PropagateLoader } from "react-spinners";
import { formatDate } from "date-fns";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

type AuthProvider = {
   provider: string;
   providerId: string;
};

type UserRole = "ADMIN" | "AGENT"; // extend if more roles exist
type UserStatus = "ACTIVE" | "INACTIVE"; // extend if more statuses exist

type User = {
   _id: string;
   email: string;
   role: UserRole;
   phone: string;
   isActive: boolean;
   status: UserStatus;
   isApproved: boolean;
   auth: AuthProvider[];
   createdAt: string; // ISO date string
   updatedAt: string; // ISO date string
   name: string;
};

export default function AllUsers() {
   const { data: AllUsers, isLoading } = useAllUsersQuery(undefined);
   const AllUsersData = AllUsers?.data;
   // console.log(AllUsersData, "all users ", AllUsers, "row data");
   return (
      <div>
         <Table className="border border-accent-foreground ">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
               <TableRow className="border-b-2 border-accent-foreground ">
                  <TableHead className="">User Type</TableHead>
                  <TableHead>Form Number</TableHead>
                  <TableHead>isActive</TableHead>
                  <TableHead>isApproved</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {isLoading ? (
                  <div className=" flex justify-center items-center py-8 w-full space-y-10 ">
                     <PropagateLoader size={16} color="#181EA1" />
                  </div>
               ) : (
                  AllUsersData?.map((users: User, index: number) => {
                     return (
                        <TableRow key={index} className="md:space-y-3 mx-auto ">
                           <TableCell>{users?.role}</TableCell>
                           <TableCell>{users?.phone ? users.phone : "Not Number"}</TableCell>
                           <TableCell>{users?.isActive ? "✅" : "❌"}</TableCell>
                           <TableCell>{users?.isApproved ? "✅" : "❌"}</TableCell>
                           <TableCell>{users?.email}</TableCell>
                           <TableCell>{formatDate(users?.updatedAt, "PPP")}</TableCell>
                           <TableCell className="uppercase">{users.status}</TableCell>
                           <TableCell className="uppercase mx-auto w-4">
                              <Link to={`/users/${users._id}`}>
                                 <Button variant="outline">Update</Button>
                              </Link>
                           </TableCell>
                        </TableRow>
                     );
                  })
               )}
            </TableBody>
         </Table>
      </div>
   );
}
