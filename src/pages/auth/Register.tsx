import { Input } from "@/components/ui/input";
import { FormProvider, useForm } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import PasswordInput from "./PaaswordInput";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";

const registerSchema = z
   .object({
      phone: z.string().regex(/^[0-9]{11}$/, {
         message: "Invalid Bangladeshi phone number",
      }),
      email: z.email(),
      password: z
         .string()
         .min(6, { message: "Password must be at least 6 characters" })
         .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
         .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
         .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, {
            message: "Password must contain at least one special character",
         }),
      confirmPassword: z.string().min(6, { error: "Confirm Password is too short, Must be 6 characters long" }).max(50),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"], // path of error
   });

export function RegisterForm() {
   const navigate = useNavigate();
   const [register] = useRegisterMutation();
   const form = useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
         phone: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
   });

   const handleFormSubmit = async (data: z.infer<typeof registerSchema>) => {
      const userInfo = {
         phone: data.phone,
         email: data.email,
         password: data.password,
      };
      console.log("userInfo", userInfo);
      const toastId = toast.loading("loading...");
      try {
         const result = await register(userInfo).unwrap();
         console.log(result);
         toast.success("Register Successfully", { id: toastId });
         navigate("/login");
         form.reset();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <FormProvider {...form}>
         <form id="registerId" onSubmit={form.handleSubmit(handleFormSubmit)}>
            <div className="relative w-full h-12 mt-6  transition-all duration-700 delay-100 ">
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className="">
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                           <Input
                              className="w-full h-full bg-transparent border-none outline-none text-white font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                              type="text"
                              placeholder="Enter your email"
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
            <div className="relative w-full h-12 my-12 transition-all duration-700 delay-200">
               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                     <FormItem className="">
                        <FormLabel className="text-white">Phone</FormLabel>
                        <FormControl>
                           <Input
                              className="w-full h-full bg-transparent border-none outline-none text-white font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
                              type="text"
                              placeholder="Enter your Phone"
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

            <div className="relative w-full h-12 my-12 transition-all duration-700 delay-200">
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-white">
                           Password
                        </FormLabel>
                        <FormControl>
                           <PasswordInput  {...field} />
                        </FormControl>
                        <FormDescription className="sr-only">This is your public display name.</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className="relative w-full h-12 my-12 transition-all duration-700 delay-200">
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-white">Confirm Password</FormLabel>
                        <FormControl>
                           <PasswordInput {...field} placeholder="Confirm your password" />
                        </FormControl>
                        <FormDescription className="sr-only">Confirm your password</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className="relative w-full h-12 mt-6 transition-all duration-700 delay-300">
               <button
                  type="submit"
                  className="relative w-full h-full bg-transparent rounded-full cursor-pointer text-base font-semibold border-2 border-[#2655d6] overflow-hidden z-10 before:content-[''] before:absolute before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#282d77e0] before:via-[#153ca8] before:to-[#25252b] before:-top-full before:left-0 before:z-[-1] before:transition-all before:duration-500 hover:before:top-0 text-white"
               >
                  Register
               </button>
            </div>
         </form>
      </FormProvider>
   );
}
