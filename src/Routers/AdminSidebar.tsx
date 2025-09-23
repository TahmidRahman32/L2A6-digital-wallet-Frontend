import { allTransactions } from "@/pages/admin/allTransaction";
import AllUsers from "@/pages/admin/AllUsers";

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
            title: "All Users",
            url: "/admin/all-users",
            component: AllUsers,
         },
         {
            title: "",
            url: "/admin/all-users/",
            component: AllUsers,
         },
      ],
   },
];
