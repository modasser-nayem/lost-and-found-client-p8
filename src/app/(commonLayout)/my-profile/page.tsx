import Image from "next/image";
import React from "react";
import photoURL from "@/assets/logo1.png";

const MyProfilePage = () => {
   return (
      <div className="container">
         <div className="my-10 bg-gray-200 p-10 rounded-lg flex gap-12">
            <div>
               <Image
                  src={photoURL}
                  alt="user"
                  className="w-[180px] h-[180px] rounded-full"
               />
            </div>
            <div>
               <h2 className="text-2xl font-bold">My Profile</h2>
            </div>
         </div>
      </div>
   );
};

export default MyProfilePage;
