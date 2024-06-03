"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import FoundItemTable from "@/components/UI/Dashboard/FoundItemTable/FoundItemTable";
import { useGetAllFoundReportQuery } from "@/redux/api/foundItemApi";
import React from "react";

const AllFoundReportPage = () => {
   const { data, isLoading, isError } = useGetAllFoundReportQuery(undefined);
   const items = data?.data;

   return (
      <>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            items && <FoundItemTable items={items} />
         )}
      </>
   );
};

export default AllFoundReportPage;
