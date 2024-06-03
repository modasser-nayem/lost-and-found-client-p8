"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import LostItemTable from "@/components/UI/Dashboard/LostItemTable/LostItemTable";
import { useGetAllLostReportQuery } from "@/redux/api/lostItemApi";
import React from "react";

const AllLostReportPage = () => {
   const { data, isLoading, isError } = useGetAllLostReportQuery(undefined);
   const items = data?.data;

   return (
      <>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            items && <LostItemTable items={items} />
         )}
      </>
   );
};

export default AllLostReportPage;
