import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
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

const SendMoneySchema = z.object({
   recipientPhone: z.string().regex(/^[0-9]{11}$/, {
      message: "Invalid Bangladeshi phone number",
   }),

   amount: z.string().min(0, { error: "Please Inter Positive Number" }).max(50),
});

export function SendMoneyModal({ children, onConfirm }: IProps) {
   const form = useForm<z.infer<typeof SendMoneySchema>>({
      resolver: zodResolver(SendMoneySchema),
   });
   const [open, setOpen] = useState(false);
   const [SendMoney] = useSendMoneyMutation();
   const handleConfirm = async (data: z.infer<typeof SendMoneySchema>) => {
      onConfirm();
      const sendMoneyInfo = {
         recipientPhone: data.recipientPhone,
         amount: Number(data.amount),
      };
      const toastId = toast.loading("Loading...");
      console.log(sendMoneyInfo);
      try {
         const res = await SendMoney(sendMoneyInfo).unwrap();
         if (res.success) {
            toast.success(" Money Sended Successfully", { id: toastId });
            setOpen(false);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <FormProvider {...form}>
            <form id="handleSendMoneyId" onSubmit={form.handleSubmit(handleConfirm)}>
               <DialogTrigger asChild>
                  {/* <Button variant="outline">Open Dialog</Button> */}
                  {children}
               </DialogTrigger>
               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle className="text-2xl mx-auto font-bold font">Send Money Form</DialogTitle>
                     <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 mb-6">
                     <div className="relative w-full h-12 mt-6  transition-all duration-700 delay-100 ">
                        <FormField
                           control={form.control}
                           name="recipientPhone"
                           render={({ field }) => (
                              <FormItem className="">
                                 <FormLabel className="">Phone</FormLabel>
                                 <FormControl>
                                    <Input
                                       className="w-full h-full bg-transparent border-none outline-none font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                                       type="text"
                                       placeholder="Inter your email"
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
                     <Button form="handleSendMoneyId" type="submit">
                        Send
                     </Button>
                  </DialogFooter>
               </DialogContent>
            </form>
         </FormProvider>
      </Dialog>
   );
}
