"use client";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import MyFoundItemCard from "@/components/UI/MyFoundItemCard/MyFoundItemCard";
import { useGetMyAllFoundReportQuery } from "@/redux/api/foundItemApi";
import React from "react";

const MyFoundReportsPage = () => {
   const { data, isLoading, isError } = useGetMyAllFoundReportQuery(undefined);

   const myFoundItems = data?.data;

   return (
      <div className="container min-h-screen my-[4rem]">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               My Found Reports
            </span>
         </h2>
         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {isLoading ? (
               <LoadingSkeleton />
            ) : isError ? (
               <NetworkError />
            ) : (
               myFoundItems &&
               myFoundItems.map((item) => (
                  <MyFoundItemCard
                     key={item.id}
                     item={item}
                  />
               ))
            )}
         </div>
      </div>
   );
};

export default MyFoundReportsPage;
