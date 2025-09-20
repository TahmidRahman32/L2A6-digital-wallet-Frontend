import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/Types";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
   {
      title: "Admin Analytics",
      items: [
         {
            title: "Analytics",
            url: "/admin/analytics",
            component: Analytics,
         },
      ],
   },
   {
      title: "Admin Action Management",
      items: [
         // {
         //    title: "Add Tour",
         //    url: "/admin/add-tour",
         //    component: AddTour,
         // },
      ],
   },
];
