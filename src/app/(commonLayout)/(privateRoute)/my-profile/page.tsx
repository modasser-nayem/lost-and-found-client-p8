"use client";

import Image from "next/image";
import React from "react";
import photoURL from "@/assets/profile.png";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import moment from "moment";
import MyLostItemCard from "@/components/UI/MyLostItemCard/MyLostItemCard";
import MyFoundItemCard from "@/components/UI/MyFoundItemCard/MyFoundItemCard";
import Link from "next/link";
import Button from "@/components/UI/Button";
import { useGetMyClaimItemsQuery } from "@/redux/api/claimApi";
import MyClaimItemCard from "@/components/UI/MyClaimItemCard/MyClaimItemCard";

const MyProfilePage = () => {
   const { data } = useGetMyProfileQuery(undefined);
   const { data: claimItems } = useGetMyClaimItemsQuery(undefined);

   const myProfile = data?.data;
   const lostItems = data?.data?.lostItems;
   const foundItems = data?.data?.foundItems;

   return (
      <div className="container">
         {myProfile && (
            <div className="my-10 bg-gray-200 p-10 rounded-lg flex flex-wrap md:flex-nowrap justify-center md:justify-normal items-start gap-12">
               <div>
                  <Image
                     src={myProfile.photoURL ? myProfile.photoURL : photoURL}
                     alt="user"
                     className="w-[180px] h-[180px] rounded-full"
                  />
                  <Link
                     href="/my-profile/change-password"
                     className="block mt-5 text-center text-sm py-1 px-2 rounded-md text-primary border-primary border-[2px] hover:bg-primary hover:text-white"
                  >
                     Change Password
                  </Link>
               </div>
               <div>
                  <h2 className="text-2xl font-bold">My Profile</h2>
                  <div className="flex flex-wrap gap-y-2 gap-x-10 my-4">
                     <p>Name: {myProfile.name}</p>
                     <p>Username: {myProfile.username}</p>
                     <p>Email: {myProfile.email}</p>
                     {myProfile.phone && <p>Phone: {myProfile.phone}</p>}
                     <p>
                        Create At:{" "}
                        {moment(myProfile.createdAt).format("MMM Do YYYY")}
                     </p>
                     {myProfile.passwordChangeAt && (
                        <p>
                           Last Password change:{" "}
                           {moment(myProfile.passwordChangeAt).fromNow()}
                        </p>
                     )}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 lg:gap-8">
                     <div className="font-semibold bg-gray-300 px-5 py-3 rounded-lg">
                        <span>Total Lost Item</span>
                        <span className="ml-2">
                           {" "}
                           {myProfile._count.lostItems}
                        </span>
                     </div>
                     <div className="font-semibold bg-gray-300 px-5 py-3 rounded-lg">
                        <span>Total Found Item</span>
                        <span className="ml-2">
                           {" "}
                           {myProfile._count.foundItems}
                        </span>
                     </div>
                     <div className="font-semibold bg-gray-300 px-5 py-3 rounded-lg">
                        <span>Total Claim Item</span>
                        <span className="ml-2">
                           {" "}
                           {myProfile._count.claimItems}
                        </span>
                     </div>
                  </div>
                  {/* links */}
                  <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-8">
                     <Link
                        href="my-lost-reports"
                        className="py-1.5 px-4 bg-primary text-white rounded-md"
                     >
                        My Lost Reports
                     </Link>
                     <Link
                        href="my-found-reports"
                        className="py-1.5 px-4 bg-primary text-white rounded-md"
                     >
                        My Found Reports
                     </Link>
                     <Link
                        href="my-claim-request"
                        className="py-1.5 px-4 bg-primary text-white rounded-md"
                     >
                        My Claim Items
                     </Link>
                  </div>
               </div>
            </div>
         )}
         {/* ======= */}
         <div className="pt-8 pb-10">
            <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
               <span className="border-b-4 border-primary p-2">
                  My Lost Reports
               </span>
            </h2>
            {lostItems && (
               <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
                     {lostItems.map((item) => (
                        <MyLostItemCard
                           key={item.id}
                           item={item}
                        />
                     ))}
                  </div>

                  {lostItems.length > 3 && (
                     <div className="text-center">
                        <Link href="my-lost-reports">
                           <Button>View All</Button>
                        </Link>
                     </div>
                  )}
               </>
            )}
         </div>
         <div className="pt-8 pb-10">
            <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
               <span className="border-b-4 border-primary p-2">
                  My Found Item
               </span>
            </h2>
            {foundItems && (
               <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
                     {foundItems.map((item) => (
                        <MyFoundItemCard
                           key={item.id}
                           item={item}
                        />
                     ))}
                  </div>

                  {foundItems.length > 3 && (
                     <div className="text-center">
                        <Link href="my-found-reports">
                           <Button>View All</Button>
                        </Link>
                     </div>
                  )}
               </>
            )}
         </div>
         <div className="pt-8 pb-10">
            <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
               <span className="border-b-4 border-primary p-2">
                  My Claim Items
               </span>
            </h2>
            {claimItems?.data && (
               <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
                     {claimItems.data.map((item) => (
                        <MyClaimItemCard
                           key={item.id}
                           item={item}
                        />
                     ))}
                  </div>

                  {claimItems.data.length > 3 && (
                     <div className="text-center">
                        <Link href="my-claim-reports">
                           <Button>View All</Button>
                        </Link>
                     </div>
                  )}
               </>
            )}
         </div>
      </div>
   );
};

export default MyProfilePage;
