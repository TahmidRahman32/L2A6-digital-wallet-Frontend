
import { useUserInfoQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/Types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";
import { RiseLoader } from "react-spinners";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
   return function AuthWrapper() {
      const { data, isLoading } = useUserInfoQuery(undefined);
      if (isLoading) {
         return (
            <div className="flex items-center justify-center h-screen w-full">
               <RiseLoader size={30} color="#181EA1" />
            </div>
         );
      }

      if (!isLoading && !data?.data?.email) {
         return <Navigate to={"/login"} />;
      }

      if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
         return <Navigate to={"/unauthorized"} />;
      }
      return <Component />;
   };
};
