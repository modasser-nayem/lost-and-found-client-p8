"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
   const pathname = usePathname();

   let navLinks = [
      {
         path: "/dashboard",
         name: "Dashboard",
      },
      {
         path: "/dashboard/all-lost-request",
         name: "All Lost Request",
      },
      {
         path: "/dashboard/all-found-request",
         name: "All Found Request",
      },
      {
         path: "/dashboard/all-claim-item",
         name: "All Claim Item",
      },
      {
         path: "/dashboard/change-password",
         name: "Change Password",
      },
   ];

   return (
      <>
         <Link
            href="/"
            className="flex items-center gap-3"
         >
            <Image
               src={logo}
               alt="Lost and found logo"
               width={40}
               height={40}
            />
            <h2 className="text-2xl font-semibold">Lost & Found</h2>
         </Link>
         <div className="my-10 flex flex-col gap-4">
            {navLinks.map((nav, i) => (
               <Link
                  key={i}
                  href={nav.path}
                  className={`text-base px-2.5 py-2 rounded-md font-medium hover:text-primary ${
                     pathname === nav.path && "text-primary bg-gray-200"
                  }`}
               >
                  {nav.name}
               </Link>
            ))}
         </div>
      </>
   );
};

export default DashboardSidebar;
