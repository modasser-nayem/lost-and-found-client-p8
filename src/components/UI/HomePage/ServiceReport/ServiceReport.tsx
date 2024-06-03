"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import { useGetTotalCountReportQuery } from "@/redux/api/reportApi";

const ServiceReport = () => {
   const { data, isLoading, isError } = useGetTotalCountReportQuery(undefined);
   const result = data?.data;

   return (
      <div className="container mt-[100px]">
         <div className="text-center">
            <h1 className="text-4xl font-bold">Service Reports</h1>
            <p className="max-w-[600px] mx-auto mt-5">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Placeat, quod! Praesentium possimus labore quod hic.
            </p>
         </div>

         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            result && (
               <div className="max-w-[1000px] mx-auto p-14 rounded-lg md:bg-gray-200 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-5 my-10 md:my-20">
                  <div className="text-center text-xl py-5 md:py-1 px-10 md:px-2 rounded-md font-medium bg-gray-200 md:bg-none">
                     <p className="">{result.totalLostItem}+</p>
                     <p className="">Lost Report</p>
                  </div>
                  <div className="text-center text-xl py-5 md:py-1 px-10 md:px-2 rounded-md font-medium bg-gray-200 md:bg-none">
                     <p className="">{result.totalFoundLostItem}+</p>
                     <p className="">Lost reunions</p>
                  </div>
                  <div className="text-center text-xl py-5 md:py-1 px-10 md:px-2 rounded-md font-medium bg-gray-200 md:bg-none">
                     <p className="">{result.totalFoundItem}+</p>
                     <p className="">Found Report</p>
                  </div>
                  <div className="text-center text-xl py-5 md:py-1 px-10 md:px-2 rounded-md font-medium bg-gray-200 md:bg-none">
                     <p className="">{result.totalClaimRequestApproved}+</p>
                     <p className="">Found reunions</p>
                  </div>
               </div>
            )
         )}
      </div>
   );
};

export default ServiceReport;
