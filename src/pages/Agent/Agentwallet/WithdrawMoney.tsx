import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useWithdrawMutation } from "@/redux/features/wallet/wallet.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign } from "lucide-react";
import { useState, type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
interface IProps {
   children: ReactNode;
   onConfirm: () => void;
}

const cashOutSchema = z.object({
   userPhone: z.string().regex(/^[0-9]{11}$/, {
      message: "Invalid Bangladeshi phone number",
   }),

   amount: z.string().min(0, { error: "Please Inter Positive Number" }).max(50),
});


export function WithdrawMoney({ children, onConfirm }: IProps) {
   const form = useForm<z.infer<typeof cashOutSchema>>({
      resolver: zodResolver(cashOutSchema),
   });
   const [open, setOpen] = useState(false);
   const [Withdraw] = useWithdrawMutation();
   const handleConfirm = async (data: z.infer<typeof cashOutSchema>) => {
      console.log("added");
      onConfirm();
      const cashOutInfo = {
         amount: Number(data.amount),
         userPhone: data.userPhone,
      };
      const toastId = toast.loading("Loading...");
      console.log(cashOutInfo);
      try {
         const res = await Withdraw(cashOutInfo).unwrap();
         console.log(res)
         if (res.success) {
            toast.success(" Cash-Out Successfully", { id: toastId });
            setOpen(false);
         }
      } catch (error: any) {
         if (error?.data.success === false) {
            toast.error(error?.data.message, { id: 0});
         console.log(error?.data.success);
       }
      }
   };
   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <FormProvider {...form}>
            <form id="handleWithdrawId" onSubmit={form.handleSubmit(handleConfirm)}>
               <DialogTrigger asChild>
                  {/* <Button variant="outline">Open Dialog</Button> */}
                  {children}
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle className="text-2xl mx-auto font-bold font">Cash-Out Form</DialogTitle>
                     <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 mb-6">
                     <div className="relative w-full h-12 mt-6  transition-all duration-700 delay-100 ">
                        <FormField
                           control={form.control}
                           name="userPhone"
                           render={({ field }) => (
                              <FormItem className="">
                                 <FormLabel className="">Phone</FormLabel>
                                 <FormControl>
                                    <Input
                                       className="w-full h-full bg-transparent border-none outline-none font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                                       type="text"
                                       placeholder="Inter your Phone"
                                       {...field}
                                    />
                                 </FormControl>
                                 <svg className="absolute -bottom-1 right-2  w-5 h-5 text-accent-foreground transition-colors duration-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-6.627 0-12 5.373-12 12h24c0-6.627-5.373-12-12-12z" />
                                 </svg>
                                 <FormDescription className="sr-only">This is your public display name.</FormDescription>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>
                     <div className="relative w-full h-12 mt-6  transition-all duration-700 delay-100 ">
                        <FormField
                           control={form.control}
                           name="amount"
                           render={({ field }) => (
                              <FormItem className="">
                                 <FormLabel className="">Amount</FormLabel>
                                 <FormControl>
                                    <Input
                                       className="w-full h-full bg-transparent border-none outline-none  font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                                       type="text"
                                       placeholder="Inter your email"
                                       {...field}
                                    />
                                 </FormControl>

                                 <span className="absolute -bottom-1 right-2  w-5 h-5 text-accent-foreground transition-colors duration-500">
                                    <DollarSign />{" "}
                                 </span>
                                 <FormDescription className="sr-only">This is your public display name.</FormDescription>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>
                  </div>
                  <DialogFooter>
                     <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                     </DialogClose>
                     <Button form="handleWithdrawId" type="submit">
                        Cash-Out
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </form>
         </FormProvider>
      </Dialog>
   );
}

