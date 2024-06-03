"use client";

import Link from "next/link";
import MyFoundItemCard from "../../MyFoundItemCard/MyFoundItemCard";
import Button from "../../Button";
import { useGetMyAllFoundReportQuery } from "@/redux/api/foundItemApi";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";

const ProfileFoundItems = () => {
   const queryArguments = {
      query: [
         {
            name: "limit",
            value: 4,
         },
      ],
   };

   const { data, isLoading, isError } =
      useGetMyAllFoundReportQuery(queryArguments);

   const foundItems = data?.data;

   return (
      <div className="pt-8 pb-10">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">My Found Item</span>
         </h2>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            foundItems && (
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
            )
         )}
      </div>
   );
};

export default ProfileFoundItems;
