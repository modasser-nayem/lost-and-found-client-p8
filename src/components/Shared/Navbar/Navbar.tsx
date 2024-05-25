"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOutUser } from "@/redux/features/auth";

const Navbar = () => {
   const router = useRouter();
   const pathname = usePathname();
   const dispatch = useAppDispatch();
   const user = useAppSelector((state) => state.auth.user);

   const handleLogOut = () => {
      dispatch(logOutUser());
      router.push("/");
      router.refresh();
   };

   const navLinks = [
      {
         path: "/",
         name: "Home",
      },
      {
         path: "/about-us",
         name: "About Us",
      },
   ];

   if (user?.role) {
      navLinks.push(
         {
            path: "/my-profile",
            name: "My Profile",
         },
         {
            path: "/my-lost-reports",
            name: "My Lost Reports",
         }
      );
   }

   if (user?.role === "admin") {
      navLinks.push({
         path: "/my-profile",
         name: "My Profile",
      });
      navLinks.push({
         path: "/dashboard",
         name: "Dashboard",
      });
   }

   return (
      <div className="container mx-auto flex items-center justify-between py-5">
         <div className="flex items-center gap-3">
            <Image
               src={logo}
               alt="Lost and found logo"
               width={50}
               height={50}
            />
            <h2 className="text-3xl font-semibold">Lost & Found</h2>
         </div>
         <div>
            <ul className="flex items-center justify-center gap-10">
               {navLinks.map((nav, i) => (
                  <Link
                     key={i}
                     href={nav.path}
                     className={`font-medium hover:text-primary ${
                        pathname === nav.path && "text-primary"
                     }`}
                  >
                     {nav.name}
                  </Link>
               ))}
            </ul>
         </div>
         <div className="flex items-center gap-5">
            {user ? (
               <Button onClick={handleLogOut}>Logout</Button>
            ) : (
               <>
                  <Link href="/login">
                     <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/register">
                     <Button>Sign Up</Button>
                  </Link>
               </>
            )}
         </div>
      </div>
   );
};

export default Navbar;
