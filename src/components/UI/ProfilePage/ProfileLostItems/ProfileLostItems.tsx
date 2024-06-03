"use client";

import { useGetMyAllLostReportQuery } from "@/redux/api/lostItemApi";
import MyLostItemCard from "../../MyLostItemCard/MyLostItemCard";
import Link from "next/link";
import Button from "../../Button";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";

const ProfileLostItems = () => {
   const queryArguments = {
      query: [
         {
            name: "limit",
            value: 4,
         },
      ],
   };

   const { data, isLoading, isError } =
      useGetMyAllLostReportQuery(queryArguments);
   const lostItems = data?.data;

   return (
      <div className="pt-8 pb-10">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               My Lost Reports
            </span>
         </h2>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            lostItems && (
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
            )
         )}
      </div>
   );
};

export default ProfileLostItems;
