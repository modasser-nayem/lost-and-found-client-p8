"use client";
import MyLostItemCard from "@/components/UI/MyLostItemCard/MyLostItemCard";
import { useGetMyAllLostReportQuery } from "@/redux/api/lostItemApi";
import React from "react";

const MyLostReports = () => {
   const { data } = useGetMyAllLostReportQuery(undefined);

   return (
      <div className="container min-h-screen my-[4rem]">
         <h2 className="text-2xl text-center font-semibold border-primary px-6 py-1">
            <span className="border-b-4 border-primary p-4">
               My Lost Reports
            </span>
         </h2>
         <div className="mt-16 grid grid-cols-4 gap-10">
            {data?.data &&
               data.data.map((item) => (
                  <MyLostItemCard
                     key={item.id}
                     item={item}
                  />
               ))}
         </div>
      </div>
   );
};

export default MyLostReports;
