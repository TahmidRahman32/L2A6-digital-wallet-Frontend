import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllUsersQuery, useUserBlockedMutation } from "@/redux/features/user/user.api";
import { formatDate } from "date-fns";
import {  useParams } from "react-router";
import { PropagateLoader } from "react-spinners";

export default function UsersUpdate() {
   const { id } = useParams();

   const { data, isLoading } = useAllUsersQuery({ _id: id });
   const [userBlocked] = useUserBlockedMutation();

   
   if (isLoading) {
      return (
         <div className=" flex justify-center items-center py-8 w-full space-y-10 ">
            <PropagateLoader size={16} color="#181EA1" />
         </div>
      );
   }
   const item = data.data[0];
   console.log("inside user details", item);

   const handleUserBlocked = async () => {
      const res = await userBlocked({ id, isBlocked: false });
      console.log(res, "usersBlocked")
   };
   return (
      <div className="flex flex-col w-full h-screen  justify-center">
         <div>
            <div className="flex flex-col  max-w-6xl lg:h-96 mx-auto p-6 shadow-md rounded-xl sm:px-12 dark:bg-input text-accent-foreground">
               <div className="md:flex justify-between">
                  <div>
                     <img src={"https://source.unsplash.com/150x150/?portrait?3"} alt="" className="w-20 h-20  rounded-full dark:bg-gray-500 aspect-square" />
                     <h1 className="text-xl font-mono font-semibold">User Details:</h1>
                     <p className="flex items-center gap-1 ">
                        <p>✅</p>
                        <p className="text-xm">{item.email}</p>
                     </p>
                     <p className="flex items-center gap-1 ">
                        <p>✅</p>
                        <p className="text-xm">{item.phone ? item.phone : "unavailable"}</p>
                     </p>
                     <p className="flex items-center gap-1 ">
                        <p>✅</p>
                        <p className="text-xm">{item.role ? item.role : "unavailable"}</p>
                     </p>
                     <p className="flex items-center gap-1 ">
                        <p>✅</p>
                        <p className="text-xm">{item.email}</p>
                     </p>
                     <p className="flex items-center gap-1 ">
                        <p>✅</p>
                        <p className="text-xm">{formatDate(item.updatedAt, "PPP")}</p>
                     </p>
                  </div>
                  <div>
                     <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-semibold font-serif my-4">Update UserRole</h2>
                        <Table className="border-2 border-accent-foreground w-[330px]">
                           <TableCaption>A list of your recent invoices.</TableCaption>
                           <TableHeader>
                              <TableRow className="border-b-2 border-accent-foreground ">
                                 <TableHead>Status</TableHead>
                                 <TableHead>Role</TableHead>
                                 <TableHead>Action</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              <TableRow className="md:space-y-3 mx-auto border-y-2 border-accent-foreground">
                                 <TableCell className={item.isApproved ? "bg-green-900 border-x-2 border-accent-foreground" : " bg-red-950 border-x-2 border-accent-foreground"}>{item.isApproved ? "✅" : "❌"}</TableCell>
                                 <TableCell className={" font-mono font-bold border-x-2 border-accent-foreground"}>{item.role}</TableCell>
                                 <TableCell className="w-6">
                                    {item.isApproved ? (
                                       <Button variant="outline" className="w-24">
                                          Suspend
                                       </Button>
                                    ) : (
                                       <Button variant="outline" className="w-24">
                                          Approved
                                       </Button>
                                    )}
                                 </TableCell>
                              </TableRow>
                              <TableRow className="md:space-y-3 mx-auto border-y-2 border-accent-foreground">
                                 <TableCell className={item.isBlocked ? "bg-green-900 border-x-2 border-accent-foreground" : " bg-red-950 border-x-2 border-accent-foreground"}>{item.isBlocked ? "✅" : "❌"}</TableCell>
                                 <TableCell className={" font-mono font-bold border-x-2 border-accent-foreground"}>{item.isBlocked ? "Not Block" : "Blocked"}</TableCell>
                                 <TableCell className="w-6 mx-auto">
                                    {item.isBlocked ? (
                                       <Button variant="outline" className="w-24">
                                          Block
                                       </Button>
                                    ) : (
                                       <Button onClick={handleUserBlocked} variant="outline" className="w-24">
                                          Unblock
                                       </Button>
                                    )}
                                 </TableCell>
                              </TableRow>
                           </TableBody>
                        </Table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
