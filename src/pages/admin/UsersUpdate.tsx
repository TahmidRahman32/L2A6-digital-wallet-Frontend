import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useApproveAgentMutation, useSuspendAgentMutation } from "@/redux/features/agent/agent.api";
import { useAllUsersQuery, useUserBlockedMutation, useUserStatusChangeMutation } from "@/redux/features/user/user.api";
import { formatDate } from "date-fns";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { PropagateLoader } from "react-spinners";
import { toast } from "sonner";

export default function UsersUpdate() {
   const { id } = useParams();
   const [Blocked, setBlocked] = useState(true);
   const [agentApprove, setAgentApprove] = useState(true);
   const { data, isLoading } = useAllUsersQuery({ _id: id });
   const [userBlocked] = useUserBlockedMutation();
   const [userStatusChange] = useUserStatusChangeMutation();
   const [userApprove] = useApproveAgentMutation();
   const [userSuspend] = useSuspendAgentMutation();

   // console.log(getWallet, "get Wallet data");

   if (isLoading) {
      return (
         <div className=" flex justify-center items-center py-8 w-full space-y-10 ">
            <PropagateLoader size={16} color="#181EA1" />
         </div>
      );
   }
   const item = data.data[0];
   // console.log("inside user details", item);

   const handleUserBlocked = async () => {
      setBlocked(!Blocked);
      const toastId = toast.loading("loading...");
      try {
         const res = await userBlocked({ id, isBlocked: Blocked });
        const statusChnage =  await userStatusChange({ id, isActive: !Blocked });
         console.log(res, "usersBlocked");
         console.log(statusChnage, "statusChnage");
         if (res?.data?.message === "User blocked successfully" || res?.data?.message === "User unblocked successfully") {
            toast.success("User Approved Successfully", { id: toastId });
         }
         toast.success("Completed", { id: 0 });
      } catch (error) {}
   };

   const handleApproveUser = async () => {
      const toastId = toast.loading("loading...");
      try {
         setAgentApprove(!agentApprove);
         const res = await userApprove({ id, isApproved: agentApprove });
         console.log(res, "approve user");
         if (res?.data?.message === "Agent approved successfully") {
            toast.success("User Approved Successfully", { id: toastId });
         }
         toast.success("Completed", { id: 0 });
      } catch (error) {
         console.log(error);
      }
   };
   const handleSuspendUser = async () => {
      const toastId = toast.loading("loading...");
      try {
         const res = await userSuspend({ id, reason: "misconduct" });
         if (res?.data?.message === "Agent suspended successfully") {
            toast.success("User Approved Successfully", { id: toastId });
         }
         toast.success("Completed", { id: 0 });
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="flex flex-col w-full h-screen  justify-center">
         <div>
            <div className="mx-auto w-full max-w-6xl p-4 flex justify-between">
               <h1></h1>
               <Button  variant={"outline"} className="w-24">
                  <Link to={"/admin/all-users"}>Back</Link>
               </Button>
            </div>
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
                                       <DeleteConfirmation onConfirm={handleSuspendUser}>
                                          <Button variant="outline" className="w-24">
                                             Suspend
                                          </Button>
                                       </DeleteConfirmation>
                                    ) : (
                                       <DeleteConfirmation onConfirm={handleApproveUser}>
                                          <Button variant="outline" className="w-24">
                                             Approved
                                          </Button>
                                       </DeleteConfirmation>
                                    )}
                                 </TableCell>
                              </TableRow>
                              <TableRow className="md:space-y-3 mx-auto border-y-2 border-accent-foreground">
                                 <TableCell className={item.isActive ? "bg-green-900 border-x-2 border-accent-foreground" : " bg-red-950 border-x-2 border-accent-foreground"}>{item.isActive ? "✅" : "❌"}</TableCell>
                                 <TableCell className={" font-mono font-bold border-x-2 border-accent-foreground"}>{item.isActive ? "Not Block" : "Blocked"}</TableCell>
                                 <TableCell className="w-6 mx-auto">
                                    {item.isActive ? (
                                       <DeleteConfirmation onConfirm={handleUserBlocked}>
                                          <Button variant="outline" className="w-24">
                                             Block
                                          </Button>
                                       </DeleteConfirmation>
                                    ) : (
                                       <DeleteConfirmation onConfirm={handleUserBlocked}>
                                          <Button variant="outline" className="w-24">
                                             Unblock
                                          </Button>
                                       </DeleteConfirmation>
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
