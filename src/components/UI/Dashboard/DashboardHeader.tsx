"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
   const pathname = usePathname();

   let routeTitle: string = "";

   if (pathname === "/dashboard") {
      routeTitle = "Welcome to dashboard";
   } else if (pathname === "/dashboard/all-lost-report") {
      routeTitle = "All Lost Report";
   } else if (pathname === "/dashboard/all-found-report") {
      routeTitle = "All Found Report";
   } else if (pathname === "/dashboard/users") {
      routeTitle = "Users";
   } else {
      routeTitle = "Dashboard";
   }

   return (
      <div className="bg-gray-100 flex justify-between items-center h-[10vh] px-5">
         <h3 className="text-xl font-medium">{routeTitle}</h3>
         {/* <Link
            title="Profile"
            href="/my-profile"
         >
            <div className="w-[45px] h-[45px] rounded-full bg-primary"></div>
         </Link> */}
      </div>
   );
};

export default DashboardHeader;
