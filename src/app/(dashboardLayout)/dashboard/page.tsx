"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import DashboardCard from "@/components/UI/Dashboard/DashboardPage/DashboardCard";
import { useGetTotalCountReportQuery } from "@/redux/api/reportApi";
import React from "react";

const DashboardPage = () => {
   const { data, isLoading, isError } = useGetTotalCountReportQuery(undefined);
   const result = data?.data;

   return (
      <div>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            result && (
               <div className="grid grid-cols-3 gap-10">
                  <DashboardCard
                     title="Total Lost Report"
                     value={result.totalLostItem}
                  />
                  <DashboardCard
                     title="Total Lost Found"
                     value={result.totalFoundLostItem}
                  />
                  <DashboardCard
                     title="Total Found Report"
                     value={result.totalFoundItem}
                  />
                  <DashboardCard
                     title="Total Claim Request"
                     value={result.totalClaimRequest}
                  />
                  <DashboardCard
                     title="Total Claim Request"
                     value={result.totalClaimRequestPending}
                  />
                  <DashboardCard
                     title="Total Claim Approved"
                     value={result.totalClaimRequestApproved}
                  />
                  <DashboardCard
                     title="Total Claim Rejected"
                     value={result.totalClaimRequestRejected}
                  />
               </div>
            )
         )}
      </div>
   );
};

export default DashboardPage;
