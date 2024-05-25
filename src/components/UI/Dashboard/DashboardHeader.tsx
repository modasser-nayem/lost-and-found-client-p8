"use client";

import { usePathname } from "next/navigation";

const DashboardHeader = () => {
   const pathname = usePathname();

   let routeTitle: string = "";

   if (pathname === "/dashboard") {
      routeTitle = "Welcome to dashboard";
   }

   return (
      <div className="border-b-2 border-green-600 flex justify-between items-center h-[10vh] px-5">
         <h3 className="text-xl font-medium">{routeTitle}</h3>
         <div className="w-[45px] h-[45px] rounded-full bg-black"></div>
      </div>
   );
};

export default DashboardHeader;
