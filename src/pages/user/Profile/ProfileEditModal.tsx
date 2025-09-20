// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "@/components/lightswind/sheet";
// import { Button } from "@/components/lightswind/button";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/lightswind/sheet";
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
interface IProps {
   children: ReactNode;
   onConfirm: () => void;
}
const UpdateUserSchema = z.object({
   name: z.string({ message: "Name must be a string" }).min(2, { message: "Name must be at least 2 characters" }).max(50, { message: "Name must be at most 50 characters" }),
});

export function ProfileEditModal({ children, onConfirm }: IProps) {
   const form = useForm<z.infer<typeof UpdateUserSchema>>({
      resolver: zodResolver(UpdateUserSchema),
      defaultValues: {
         name: "",
      },
   });

   const handleConfirm = (data: any) => {
      onConfirm();
      console.log("added", data);
   };
   return (
      <Sheet>
         <SheetTrigger asChild>{children}</SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Edit Profile</SheetTitle>
               <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
               <FormProvider {...form}>
                  <form id="handleWithdrawId" onSubmit={form.handleSubmit(handleConfirm)}>
                     <div className=" mt-6">
                        <FormField
                           control={form.control}
                           name="name"
                           render={({ field }) => (
                              <FormItem className="">
                                 <FormLabel className="">Name</FormLabel>
                                 <FormControl>
                                    <Input
                                       className="w-full h-full bg-transparent border-none outline-none  font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                                       type="text"
                                       placeholder="Inter your Amount"
                                       {...field}
                                    />
                                 </FormControl>

                                 <span className="absolute -bottom-1 right-2  w-5 h-5 text-accent-foreground transition-colors duration-500"></span>
                                 <FormDescription className="sr-only">This is your public display name.</FormDescription>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>
                     <SheetFooter>
                        <Button form="handleWithdrawId">Save changes</Button>
                     </SheetFooter>
                  </form>
               </FormProvider>
            </div>
         </SheetContent>
      </Sheet>
   );
}
