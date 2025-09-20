import App from "@/App";
import { role } from "@/Constens/role";
import DashboardLayout from "@/Layout/DashboardLayout";
import About from "@/pages/about/About";
import Login from "@/pages/auth/Login";
import { RegisterForm } from "@/pages/auth/Register";
import Unauthorized from "@/pages/Unauthorized";
import type { TRole } from "@/Types";

import { generateRoute } from "@/utils/GenerateRoute";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./AdminSidebar";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Home from "@/pages/Home/Home";
import PageUpdated from "@/pages/Home/PageUpdated";


const router = createBrowserRouter([
   {
      path: "/",
      // element: <div>Home</div>,
      Component: App,
      children: [
         {
            // path: "/home",
            index: true,
            Component: Home,
         },
         {
            path: "/pageUpdated",
           
            Component: PageUpdated,
         },
         {
            path: "/about",
            Component: withAuth(About),
         },
      ],
   },
   {
      path: "/login",
      Component: Login,
   },
   
   {
      path: "/register",
      Component: RegisterForm,
   },
  
   {
      path: "/unauthorized",
      Component: Unauthorized,
   },

   {
      path: "/admin",
      Component: withAuth(DashboardLayout, role.ADMIN as TRole),
      children: [{ index: true, element: <Navigate to={"/admin/analytics"} /> }, ...generateRoute(adminSidebarItems)],
   },
 
   {
      path: "/user",
      Component: withAuth(DashboardLayout, role.USER as TRole),
      children: [{ index: true, element: <Navigate to={"/user/wallet"} /> }, ...generateRoute(userSidebarItems)],
   },
]);
export default router;
