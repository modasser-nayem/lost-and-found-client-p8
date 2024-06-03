"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import ClaimRequestCard from "@/components/UI/ClaimRequestCard/ClaimRequestCard";
import { useGetClaimRequestByFoundIdQuery } from "@/redux/api/claimApi";
import { useParams } from "next/navigation";
import React from "react";

const ClaimRequestPage = () => {
   const params = useParams();
   const foundReportId = params.id as string;

   const { data, isLoading, isError } = useGetClaimRequestByFoundIdQuery({
      id: foundReportId,
   });

   const claimItems = data?.data;

   return (
      <div className="container min-h-screen mt-10">
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : claimItems && claimItems.length ? (
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
               {claimItems.map((claim) => (
                  <ClaimRequestCard
                     key={claim.id}
                     item={claim}
                  />
               ))}
            </div>
         ) : (
            <p className="mt-16 text-center text-xl font-medium">
               No have any request
            </p>
         )}
      </div>
   );
};

export default ClaimRequestPage;
