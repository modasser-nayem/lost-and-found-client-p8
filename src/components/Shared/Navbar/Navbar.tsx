"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";
import useUserInfo from "@/hooks/useUserInfo";

const Navbar = () => {
   const router = useRouter();
   const userInfo = useUserInfo();

   const handleLogOut = () => {
      logoutUser(router);
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

   if (userInfo) {
      navLinks.push({
         path: "/my-profile",
         name: "My Profile",
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
                     className={`font-medium hover:text-primary`}
                  >
                     {nav.name}
                  </Link>
               ))}
            </ul>
         </div>
         <div className="flex items-center gap-5">
            {userInfo ? (
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
