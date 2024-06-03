"use client";

import { useGetAllLostReportQuery } from "@/redux/api/lostItemApi";
import LostItemCard from "../LostItemCard/LostItemCard";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";

const ResentLostReport = () => {
   const queryArguments = {
      query: [
         {
            name: "limit",
            value: 4,
         },
      ],
   };

   const { data, isLoading, isError } =
      useGetAllLostReportQuery(queryArguments);
   const lostReports = data?.data;

   return (
      <div className="container mt-[100px]">
         <div className="text-center">
            <h1 className="text-4xl font-bold">Recent Lost Item Reports</h1>
            <p className="max-w-[600px] mx-auto mt-5">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Placeat, quod! Praesentium possimus labore quod hic.
            </p>
         </div>
         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {isLoading ? (
               <LoadingSkeleton />
            ) : isError ? (
               <NetworkError />
            ) : (
               lostReports &&
               lostReports.map((item) => (
                  <LostItemCard
                     key={item.id}
                     item={item}
                  />
               ))
            )}
         </div>
      </div>
   );
};

export default ResentLostReport;
