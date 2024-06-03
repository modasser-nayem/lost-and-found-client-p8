"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import MyLostItemCard from "@/components/UI/MyLostItemCard/MyLostItemCard";
import { useGetMyAllLostReportQuery } from "@/redux/api/lostItemApi";
import React from "react";

const MyLostReportsPage = () => {
   const { data, isLoading, isError } = useGetMyAllLostReportQuery(undefined);

   const myLostReports = data?.data;

   return (
      <div className="container min-h-screen my-[4rem]">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               My Lost Reports
            </span>
         </h2>
         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {isLoading ? (
               <LoadingSkeleton />
            ) : isError ? (
               <NetworkError />
            ) : (
               myLostReports &&
               myLostReports.map((item) => (
                  <MyLostItemCard
                     key={item.id}
                     item={item}
                  />
               ))
            )}
         </div>
      </div>
   );
};

export default MyLostReportsPage;
