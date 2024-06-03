import Image from "next/image";
import React from "react";
import teamImage from "@/assets/about/team1.png";

const AboutSection = () => {
   return (
      <div className="container flex items-center justify-center mb-10 mb:my-20">
         <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-[1250px]">
            <div className="flex-1">
               <h2 className="text-4xl font-bold mb-5 text-center md:text-start">
                  About Us
               </h2>
               <p>
                  The Lost & Found website is a community-driven platform
                  designed to help individuals report and reclaim lost items. By
                  facilitating the reporting of both lost and found items, the
                  website aims to create a seamless process for reuniting people
                  with their belongings. The platform includes user-friendly
                  features for reporting items, verifying ownership, and
                  managing user profiles, with additional administrative tools
                  for overseeing site activity and user management.
               </p>
            </div>
            <div className="">
               <Image
                  src={teamImage}
                  alt="team"
                  width={500}
                  height={300}
                  className="rounded-2xl border-4"
               />
            </div>
         </div>
      </div>
   );
};

export default AboutSection;
