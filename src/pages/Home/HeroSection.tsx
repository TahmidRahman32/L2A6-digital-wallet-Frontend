
import Carousel from "./Carousel";
import { CountUp } from "./CountUp";

const items = [
   {
      id: 1,
      title: "Smart Textile",
      brand: "Get Payment",
      description: "A digital wallet and fabric tech integration.",
      tags: ["Finance", "Textile", "Innovation"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1681748777406-3892175ab78c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/pageUpdated",
   },
   {
      id: 2,
      title: "Fast, Safe & Reliable",
      brand: "Get Payment",
      description: "Wearable IoT solutions with textile sensors.",
      tags: ["IoT", "Wearables"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661774914180-08cc5695c539?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/pageUpdated",
   },
   {
      id: 2,
      title: "Smarter Payments",
      brand: "Get Payment",
      description: "Wearable IoT solutions with textile sensors.",
      tags: ["IoT", "Wearables"],
      imageUrl: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/pageUpdated",
   },
];

const HeroSection = () => {
   return (
      <div className=" dark:text-white relative grid items-start justify-center lg:h-screen  font-primary px-5 py-10 md:px-20 md:py-">
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:px-10">
            {/* Left Section */}
            <div className="text-center md:text-left mt-8 lg:mt-0">
               <h1 className="text-2xl lg:text-5xl font-bold text-black dark:text-white mb-4">
                  <span className="text-primary">Get Payment</span> Your All-in-One Digital Wallet Solution
               </h1>
               <p className="text-xs md:text-sm lg:md:text-lg text-black dark:text-white mb-8">
                  Get Payment is a secure and user-friendly digital wallet management system designed to simplify your financial life. Easily add money, withdraw, send, and receive funds anytime, anywhere. With advanced security, real-time tracking,
                  and a seamless experience, Get Payment gives you complete control over your digital transactions—all in one place.
               </p>
               <div className="flex justify-center md:justify-start gap-6">
                  {/* Follow Button */}
                  <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-white font-semibold hover:bg-primarylw-2 transition-all duration-300 transform hover:scale-105">
                     Follow
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                     </svg>
                  </button>

                  {/* Resume Button */}
                  <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted-foreground text-primary hover:text-primary font-semibold hover:bg-dark transition-all duration-300 transform hover:scale-105">
                     With Me
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                     </svg>
                  </button>
               </div>
            </div>

            {/* Right Section: Profile Image */}
            <div className="flex justify-center lg:justify-end lg:h-full ">
               <Carousel items={items} />
            </div>
         </div>
         <div className=" flex  justify-center lg:gap-12">
            <div className="lg:flex gap-2 items-center lg:w-62">
               <div className="flex gap-1 items-center">
                  <CountUp value={456} /> <span className="lg:text-4xl">+</span>
               </div>
               <h3 className="lg:text-xl font-semibold font-mono">Code Commits</h3>
            </div>
            <div className="lg:flex gap-2 items-center lg:w-62">
               <div className="flex gap-1 items-center">
                  <CountUp value={7} /> <span className="lg:text-4xl">+</span>
               </div>
               <h3 className="lg:text-xl font-semibold font-mono">Project Completed</h3>
            </div>
            <div className="lg:flex gap-2 items-center lg:w-62">
               <div className="flex gap-1 items-center">
                  <CountUp value={28} /> <span className="lg:text-4xl">+</span>
               </div>
               <h3 className="lg:text-xl font-semibold font-mono">Project Completed</h3>
            </div>
            <div className="lg:flex gap-2 items-center lg:w-50">
               <div className="flex gap-1 items-center">
                  <CountUp value={6} /> <span className="lg:text-4xl">+</span>
               </div>
               <h3 className="lg:text-xl font-semibold font-mono">Assignment No</h3>
            </div>
            <div className="hidden lg:flex  gap-2 items-center lg:w-50">
               <div className="flex gap-1 items-center">
                  <CountUp value={456} /> <span className="lg:text-4xl">+</span>
               </div>
               <h3 className="lg:text-xl font-semibold font-mono">Code Commits</h3>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
