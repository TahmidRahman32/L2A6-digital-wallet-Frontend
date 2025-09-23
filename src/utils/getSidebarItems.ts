import { role } from "@/Constens/role";
import { adminSidebarItems } from "@/Routers/AdminSidebar";
import { AgentSidebarItems } from "@/Routers/AgentSidebar";
import { userSidebarItems } from "@/Routers/userSidebarItems";
import type { TRole } from "@/Types";

export const getSidebarItems = (userRole: TRole) => {
   switch (userRole) {
      case role.ADMIN:
         return [...adminSidebarItems];
      case role.AGENT:
         return [...AgentSidebarItems];

      case role.USER:
         return [...userSidebarItems];

      default:
         return [];
   }
};
