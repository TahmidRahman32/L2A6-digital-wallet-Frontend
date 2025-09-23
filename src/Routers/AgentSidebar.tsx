import type { ISidebarItem } from "@/Types";
import { lazy } from "react";

const AgentDashboard = lazy(() => import("@/pages/Agent/AgentDashboard"));

export const AgentSidebarItems: ISidebarItem[] = [
   {
      title: "Agent Dashboard",
      items: [
         {
            title: "Analytics",
            url: "/agent/dashboard",
            component: AgentDashboard,
         },
      ],
   },
];
