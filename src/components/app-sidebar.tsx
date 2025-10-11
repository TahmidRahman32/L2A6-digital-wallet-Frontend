import * as React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";

import { Link } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";

import Logo from "@/assets/image/Logo";
import { useUserInfoQuery } from "@/redux/features/user/user.api";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const { data: userData } = useUserInfoQuery(undefined);
   const data = {
      navMain: getSidebarItems(userData?.data?.role),
   };

   return (
      <Sidebar {...props}>
         <SidebarHeader>
            <div className="flex items-center gap-4 text-3xl font-serif">
               {" "}
               <Link to={"/"} className="">
                  <Logo />
               </Link>
               Dashboard
            </div>
         </SidebarHeader>
         <SidebarContent>
            {/* We create a SidebarGroup for each parent. */}
            {data.navMain.map((item) => (
               <SidebarGroup key={item.title}>
                  <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        {item.items.map((item) => (
                           <SidebarMenuItem key={item.title} className="font-serif">
                              <SidebarMenuButton asChild>
                                 <Link to={item.url}>{item.title}</Link>
                              </SidebarMenuButton>
                           </SidebarMenuItem>
                        ))}
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            ))}
         </SidebarContent>
         <SidebarRail />
      </Sidebar>
   );
}
