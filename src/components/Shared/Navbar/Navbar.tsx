import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Button from "@/components/UI/Button";
import Link from "next/link";

const Navbar = () => {
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
         path: "/lost",
         name: "Lost item",
      },
   ];

   return (
      <div className="container mx-auto flex items-center justify-between border py-5">
         <div className="flex items-center gap-3">
            <Image
               src={logo}
               alt="Lost and found logo"
               width={60}
               height={60}
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
            <Link href="/login">
               <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/register">
               <Button>Sign Up</Button>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
