"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import FoundItemCard from "@/components/UI/FoundItemCard/FoundItemCard";
import { useGetAllFoundReportQuery } from "@/redux/api/foundItemApi";
import React from "react";

const AllFoundReportsPage = () => {
   const { data, isLoading, isError } = useGetAllFoundReportQuery(undefined);

   const foundItems = data?.data;

   return (
      <div className="container min-h-screen my-[4rem]">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               All Found Reports
            </span>
         </h2>
         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {isLoading ? (
               <LoadingSkeleton />
            ) : isError ? (
               <NetworkError />
            ) : (
               foundItems &&
               foundItems.map((item) => (
                  <FoundItemCard
                     key={item.id}
                     item={item}
                  />
               ))
            )}
         </div>
      </div>
   );
};

export default AllFoundReportsPage;
