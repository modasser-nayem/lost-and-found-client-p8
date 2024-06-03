"use client";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import moment from "moment";
import Image from "next/image";
import tempImg from "@/assets/profile.png";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";

const Profile = () => {
   const { data, isLoading, isError } = useGetMyProfileQuery(undefined);
   const myProfile = data?.data;

   return (
      <>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            myProfile && (
               <div className="my-10 bg-gray-200 p-10 rounded-lg flex flex-wrap md:flex-nowrap justify-center md:justify-normal items-start gap-12 relative">
                  <Link
                     title="Edit Profile"
                     className="absolute right-5 top-5 backdrop-blur-md"
                     href={`/my-profile/update-profile/`}
                  >
                     <FaEdit size={25} />
                  </Link>
                  <div className="min-w-[180px]">
                     <Image
                        src={myProfile.photoURL ? myProfile.photoURL : tempImg}
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
            )
         )}
      </>
   );
};

export default Profile;
