import React from "react";
import Button from "../Button";
import Link from "next/link";

const HeroSection = () => {
   return (
      <div className="container h-[80vh] flex items-center justify-center">
         <div className="flex flex-col items-center gap-5">
            <div className="text-5xl font-bold text-center">
               <h1>Find what you lost, reunite what you found! </h1>
               <h2 className="text-4xl mt-4">This is a trusted place</h2>
            </div>
            <p className="max-w-[600px] text-center">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
               obcaecati commodi corporis tenetur consequatur vel earum
               inventore temporibus dolorum accusamus.
            </p>
            <div className="flex items-center gap-4">
               <Link href="report-lost-item">
                  <Button>Report Lost item</Button>
               </Link>
               <Link href="report-found-item">
                  <Button variant="outline">Report Found item</Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
