"use client";

import FoundItemCard from "@/components/UI/FoundItemCard/FoundItemCard";
import { useGetAllFoundReportQuery } from "@/redux/api/foundItemApi";
import React from "react";

const AllFoundReportsPage = () => {
   const { data } = useGetAllFoundReportQuery(undefined);

   return (
      <div className="container min-h-screen my-[4rem]">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-2">
               All Found Reports
            </span>
         </h2>
         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data?.data &&
               data.data.map((item) => (
                  <FoundItemCard
                     key={item.id}
                     item={item}
                  />
               ))}
         </div>
      </div>
   );
};

export default AllFoundReportsPage;
