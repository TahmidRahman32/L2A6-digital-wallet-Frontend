import Profile from "@/pages/user/Profile/Profile";
import Transaction from "@/pages/user/transaction/Transaction";

import Wallet from "@/pages/user/Wallet/Wallet";
import type { ISidebarItem } from "@/Types";

export const userSidebarItems: ISidebarItem[] = [
   {
      title: "User Wallet",
      items: [
         {
            title: "Wallet",
            url: "/user/wallet",
            component: Wallet,
         },
         // {
         //    title: "Profile",
         //    url: "/user/profile",
         //    component: Profile,
         // },
         {
            title: "Profile",
            url: `/user/profile/:id`,
            component: Profile,
         },
         {
            title: "Transactions",
            url: "/user/transaction",
            component: Transaction,
         },
      ],
   },
];
