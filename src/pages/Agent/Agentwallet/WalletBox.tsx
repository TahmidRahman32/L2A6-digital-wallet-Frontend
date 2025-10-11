
import { SendMoneyModal } from "./SendMoneyModal";
import { Button } from "@/components/ui/button";
import { WithdrawMoney } from "./WithdrawMoney";
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api";


export default function WalletBox() {
   const { data: getWallet } = useGetWalletQuery(undefined);
   const Balance = getWallet?.data?.wallet?.balance;
   const handleSendMoney = () => {
   };
   const handleWithdrawMoney = () => {
   };
   return (
      <div className="lg:flex gap-12 justify-center  space-y-5 md::space-y-0">
         <div>
            <div className={`relative w-96 lg:w-[450px] h-[250px] border-2 border-[#3127c4] shadow-[0_0_25px_#3127c4] overflow-hidden`}>
               <div className="absolute right-5 top-[-480px] lg:h-[550px] w-[750px] bg-gradient-to-br from-[#70709b] to-[#5d7ebb] transform rotate-[1deg] skew-y-[48deg] origin-bottom-left transition-all duration-1000 ease-in-out delay-1000 active:rotate-0 active:skew-y-0 active:delay-500"></div>
               <div className="absolute left-[250px] top-full lg:h-[700px] w-[850px] bg-[#25252b] border-t-2 border-[#e46033] transform rotate-10 skew-y-0 origin-bottom-left transition-all duration-1000 ease-in-out delay-500 active:rotate-[-11deg] active:skew-y-[-41deg] active:delay-700"></div>
            </div>
            <div className="absolute top-20 lg:h-[450px] lg:w-[650px] lg:flex flex-col p-12 transition-all duration-700 ease-in-out ">
               <div className="space-y-4  bg-border rounded-2xl lg:flex flex-col justify-center items-center p-6 lg:w-84">
                  <h1 className="text-3xl font-serif font-bold ">Merchant Balance</h1>
                  <h2 className="text-2xl font-mono ">
                     Balance:<span className="font-medium font-serif ">৳</span> <span>{Balance?.toFixed(2)}</span>
                  </h2>
               </div>
            </div>
         </div>
         <div>
            <div className={`relative w-96 lg:w-[450px] h-[250px] border-2 border-[#b49922] shadow-[0_0_25px_#b49922] overflow-hidden`}>
               <div className="absolute right-5 top-[-480px] lg:h-[550px] w-[750px] bg-gradient-to-br from-[#aeb491] to-[#413e1c] transform rotate-[1deg] skew-y-[48deg] origin-bottom-left transition-all duration-1000 ease-in-out delay-1000 active:rotate-0 active:skew-y-0 active:delay-500"></div>
               <div className="absolute left-[250px] top-full lg:h-[700px] w-[850px] bg-[#1e1d5f] border-t-2 border-[#e46033] origin-bottom-left active:rotate-[-11deg] active:skew-y-[-41deg] active:delay-700"></div>
            </div>
            <div className="absolute lg:top-20 left-16 lg:left-[38rem] bottom-90  lg:bottom-16 lg:w-[450px] lg:h-[250px] lg:flex flex-col lg:p-12 ">
               <div className="space-y-4 flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-serif font-bold  ">Cash In Any Users.!</h1>
                  <div>
                     <SendMoneyModal onConfirm={() => handleSendMoney()}>
                        <Button>Cash-In</Button>
                     </SendMoneyModal>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className={`relative w-96 lg:w-[450px] h-[250px] border-2 border-[#c02317] shadow-[0_0_25px_#c02317] overflow-hidden`}>
               <div className="absolute right-5 top-[-480px] lg:h-[550px] w-[750px] bg-gradient-to-br from-[#bd3827] to-[#c4502c] transform rotate-[1deg] skew-y-[48deg] origin-bottom-left transition-all duration-1000 ease-in-out delay-1000 active:rotate-0 active:skew-y-0 active:delay-500"></div>
               <div className="absolute left-[250px] top-full lg:h-[700px] w-[850px] bg-[#25252b] border-t-2 border-[#e46033] transform rotate-10 skew-y-0 origin-bottom-left transition-all duration-1000 ease-in-out delay-500 active:rotate-[-11deg] active:skew-y-[-41deg] active:delay-700"></div>
            </div>
            <div className="absolute bottom-11 lg:top-20  lg:w-[450px] lg:h-[250px] lg:flex flex-col p-12 transition-all duration-700 ease-in-out ">
               <div className="space-y-4 flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-serif font-bold">Cash Out Money</h1>
                  <div>
                     <WithdrawMoney onConfirm={() => handleWithdrawMoney()}>
                        <Button className="bg-muted-foreground">CashOut</Button>
                     </WithdrawMoney>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
