"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOutUser } from "@/redux/features/auth";
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

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
      {
         path: "/all-lost-report",
         name: "Lost Reports",
      },
      {
         path: "/all-found-report",
         name: "Found Reports",
      },
   ];

   if (user?.role === "user") {
      navLinks.push({
         path: "/my-profile",
         name: "My Profile",
      });
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

   const clickRef = useRef<HTMLDivElement>(null);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      document.addEventListener("click", clickOutside, true);
      return () => document.addEventListener("click", clickOutside, true);
   }, []);

   const clickOutside = (e: any) => {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
         setIsOpen(false);
      } else if (e.target.className === "uppercase cursor-pointer nav-link") {
         setIsOpen(false);
      }
   };

   return (
      <nav
         ref={clickRef}
         className="z-50 w-full h-[80px] flex justify-center items-center relative"
      >
         <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Link href="/">
                  <div className="flex items-center gap-3">
                     <Image
                        src={logo}
                        alt="Lost and found logo"
                        width={50}
                        height={50}
                     />
                     <h2 className="text-2xl uppercase font-semibold hidden lg:block">
                        Lost & Found
                     </h2>
                  </div>
               </Link>
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-3xl"
               >
                  {isOpen ? (
                     <AiOutlineClose className="" />
                  ) : (
                     <HiMiniBars3CenterLeft />
                  )}
               </button>
            </div>
            {/* nav links */}
            <div
               className={`flex flex-col lg:flex-row items-center gap-10 absolute lg:static left-0 w-full lg:w-auto z-50 lg:z-auto py-8 lg:py-0 transition-all duration-500 ease-linear lg:transition-none ${
                  isOpen ? "bg-white top-[80px]" : " -top-[900px]"
               }`}
            >
               <div className="flex flex-col font-medium items-center lg:flex-row gap-5 px-1">
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
               </div>
            </div>
            {/* responsive button */}
            <div>
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
         </div>
      </nav>
   );
};

export default Navbar;
