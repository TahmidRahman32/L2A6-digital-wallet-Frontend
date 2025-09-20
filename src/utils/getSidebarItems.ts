import { role } from "@/Constens/role";
import { adminSidebarItems } from "@/Routers/AdminSidebar";
import { userSidebarItems } from "@/Routers/userSidebarItems";
import type { TRole } from "@/Types";

export const getSidebarItems = (userRole: TRole) => {
   switch (userRole) {
      case role.ADMIN:
         return [...adminSidebarItems, ...userSidebarItems];
      case role.AGENT:
         return [...adminSidebarItems];

      case role.USER:
         return [...userSidebarItems];

      default:
         return [];
   }
};
