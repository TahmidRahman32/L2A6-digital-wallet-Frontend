import { allTransactions } from "@/pages/admin/allTransaction";
import UsersFiltering from "@/pages/admin/UserFiltering";

import type { ISidebarItem } from "@/Types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
   {
      title: "Admin Analytics",
      items: [
         {
            title: "Analytics",
            url: "/admin/analytics",
            component: Analytics,
         },
         {
            title: "All Transactions",
            url: "/admin/all-transactions",
            component: allTransactions,
         },
        
         {
            title: "User Activities",
            url: "/admin/all-users/filter",
            component: UsersFiltering,
         },
      ],
   },
];
