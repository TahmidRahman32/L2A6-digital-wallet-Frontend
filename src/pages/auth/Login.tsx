import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "./PaaswordInput";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/Icon/GoogleIcon";
import GitHubIcon from "@/assets/Icon/GitHubIcon";
import Facebook from "@/assets/Icon/FacebookIcon";
import { RegisterForm } from "./Register";
import configFile from "@/config";
const loginSchema = z.object({
   email: z.email(),
   password: z.string().min(6, { error: "Password is too short, Must be 6 characters long" }).max(50),
});

const Login: React.FC = () => {
   const [isActive, setIsActive] = useState(false);
   const [login] = useLoginMutation();
   const navigate = useNavigate();
   const containerRef = useRef<HTMLDivElement>(null);
   const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });
   const handleFormSubmit = async (data: any) => {
      const toastId = toast.loading("loading...");
      console.log(data);
      try {
         const result = await login(data).unwrap();
         console.log(result);
         toast.success("Login Successfully", { id: toastId });
         navigate("/");
      } catch (error: any) {
         console.log(error?.data?.message);

         if (error?.data?.message === "user does not exist") {
            toast.error("user does not exist", { id: 0 });
            return;
         }
         if (error?.data?.message === "Password does not match") {
            toast.error("invalid credentials", { id: 0 });
            return;
         }
         if (error?.data?.message === "User is not verified") {
            toast.error("User is not verified", { id: 0 });

            return;
         }
      }
   };

   const handleRegisterClick = () => {
      setIsActive(true);
   };

   const handleLoginClick = () => {
      setIsActive(false);
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-[#25252b]">
         <div ref={containerRef} className={`relative w-[950px] h-[650px] border-2 border-[#3127c4] shadow-[0_0_25px_#3127c4] overflow-hidden ${isActive ? "active" : ""}`}>
            {/* Curved shapes */}
            <div className="absolute right-5 top-[-220px] lg:h-[850px] w-[950px] bg-gradient-to-br from-[#25252b] to-[#1a394e] transform rotate-[1deg] skew-y-[48deg] origin-bottom-left transition-all duration-1000 ease-in-out delay-1000 active:rotate-0 active:skew-y-0 active:delay-500"></div>
            <div className="absolute left-[250px] top-full lg:h-[700px] w-[850px] bg-[#25252b] border-t-2 border-[#e46033] transform rotate-10 skew-y-0 origin-bottom-left transition-all duration-1000 ease-in-out delay-500 active:rotate-[-11deg] active:skew-y-[-41deg] active:delay-700"></div>

            {/* Login Form */}
            <div className={`lg:absolute top-0 left-0 lg:w-1/2 h-full lg:flex justify-center flex-col px-10 transition-all duration-700 ease-in-out ${isActive ? "opacity-0 transform -translate-x-full" : "opacity-100 transform translate-x-0"}`}>
               <h2 className="text-3xl text-center mb-4 transition-all duration-700 delay-100 font-serif font-bold">Login</h2>
               <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                     <div className="relative w-full h-12 mt-6  transition-all duration-700 delay-100 ">
                        <FormField
                           control={form.control}
                           name="email"
                           render={({ field }) => (
                              <FormItem className="">
                                 <FormLabel className="">Email</FormLabel>
                                 <FormControl>
                                    <Input
                                       className="w-full h-full bg-transparent border-none outline-none text-white font-semibold border-b-2 border-white py-3 pr-9 transition-colors duration-500 focus:border-[#2b18d3]"
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

                     <div className="relative w-full h-12 my-12 transition-all duration-700 delay-200">
                        <FormField
                           control={form.control}
                           name="password"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel className="">Password</FormLabel>
                                 <FormControl>
                                    <PasswordInput {...field} />
                                 </FormControl>

                                 <FormDescription className="sr-only">This is your public display name.</FormDescription>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className="relative lg:w-full h-12 mt-6 transition-all duration-700 delay-300">
                        <button
                           type="submit"
                           className="relative w-full h-full bg-transparent rounded-full cursor-pointer text-base font-semibold border-2 border-[#2655d6] overflow-hidden z-10 before:content-[''] before:absolute before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#282d77e0] before:via-[#153ca8] before:to-[#25252b] before:-top-full before:left-0 before:z-[-1] before:transition-all before:duration-500 hover:before:top-0"
                        >
                           Login
                        </button>
                     </div>
                     <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">with</p>
                        <hr className="w-full dark:text-gray-600" />
                     </div>
                     <div className="lg:flex gap-5 space-y-3 rounded-2xl p-2 justify-around items-center border my-2">
                        <Button
                           onClick={() => window.open(`${configFile.baseUrl}/auth/google`)}
                           variant={"outline"}
                           className="relative w-24  h-full bg-transparent rounded-xl cursor-pointer text-base font-semibold border-2 border-[#2655d6] overflow-hidden z-10 before:content-[''] before:absolute before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#282d77e0] before:via-[#153ca8] before:to-[#25252b] before:-top-full before:left-0 before:z-[-1] before:transition-all before:duration-500 hover:before:top-0"
                        >
                           {" "}
                           <GoogleIcon />{" "}
                        </Button>
                        <Button
                           variant={"outline"}
                           type="button"
                           className="relative w-24  h-full bg-transparent rounded-xl cursor-pointer text-base font-semibold border-2 border-[#2655d6] overflow-hidden z-10 before:content-[''] before:absolute before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#282d77e0] before:via-[#153ca8] before:to-[#25252b] before:-top-full before:left-0 before:z-[-1] before:transition-all before:duration-500 hover:before:top-0"
                        >
                           <GitHubIcon />{" "}
                        </Button>
                        <Button
                           title="facebook"
                           variant={"outline"}
                           type="button"
                           className="relative w-24 h-full bg-transparent rounded-xl cursor-pointer text-base font-semibold border-2 border-[#2655d6] overflow-hidden z-10 before:content-[''] before:absolute before:h-[300%] before:w-full before:bg-gradient-to-b before:from-[#282d77e0] before:via-[#153ca8] before:to-[#25252b] before:-top-full before:left-0 before:z-[-1] before:transition-all before:duration-500 hover:before:top-0"
                        >
                           <Facebook />{" "}
                        </Button>
                     </div>
                  </form>
               </FormProvider>
               <div className="text-sm text-center mt-5 transition-all duration-700 delay-400">
                  <p>
                     Don't have an account? <br />{" "}
                     <Link to={"/login"} className="text-[#30d6e2] font-semibold no-underline hover:underline" onClick={handleRegisterClick}>
                        Sign Up
                     </Link>
                  </p>
               </div>
            </div>

            {/* Register Form */}
            <div
               className={`lg:absolute top-0 right-0 lg:w-1/2 h-full lg:flex lg:justify-center flex-col px-14 transition-all duration-700 ease-in-out ${isActive ? "opacity-100 transform translate-x-0" : "lg:opacity-0 transform ;g:translate-x-full"}`}
            >
               <h2 className="text-3xl text-center mb-4 transition-all duration-700 delay-100 font-serif font-bold">Register</h2>
               <RegisterForm changeLocation={() => handleLoginClick()} />

               <div className="flex items-center w-full my-4">
                  <hr className="w-full dark:text-gray-600" />
                  <p className="px-3 dark:text-gray-600">with</p>
                  <hr className="w-full dark:text-gray-600" />
               </div>
               <div className="text-sm text-center mt-5 transition-all duration-700 delay-400">
                  <p>
                     Already have an account? <br />{" "}
                     <Link to={"#"} className="text-[#30d6e2] font-semibold no-underline hover:underline" onClick={handleLoginClick}>
                        Sign Up
                     </Link>
                  </p>
               </div>
            </div>

            {/* Welcome Back Info */}
            <div
               className={`lg:absolute top-0 right-0 h-full w-1/2 flex justify-center flex-col text-right py-0 px-10 pl-36 transition-all duration-700 ease-in-out ${
                  isActive ? "opacity-0 transform translate-x-full" : "opacity-100 transform translate-x-0"
               }`}
            >
               <h2 className="text-4xl uppercase leading-tight transition-all duration-700 delay-100 font-serif font-bold">WELCOME BACK!</h2>
               <p className="text-base mt-4 transition-all duration-700 delay-200 font-mono font-bold ">We are happy to have you with us again. If you need anything, we are here to help.</p>
            </div>

            {/* Welcome Info */}
            <div
               className={`lg:absolute top-0 left-0 h-full w-1/2 lg:flex justify-center flex-col text-left py-0 pr-36 pl-10 pointer-events-none transition-all duration-700 ease-in-out ${
                  isActive ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-full"
               }`}
            >
               <h2 className="text-4xl uppercase leading-tight transition-all duration-700 delay-100 font-serif font-bold">WELCOME!</h2>
               <p className="text-base mt-4 transition-all duration-700 delay-200 font-mono font-bold ">We're delighted to have you here. If you need any assistance, feel free to reach out.</p>
            </div>
         </div>
      </div>
   );
};

export default Login;
