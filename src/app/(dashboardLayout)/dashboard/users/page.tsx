"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import UsersTable from "@/components/UI/Dashboard/UsersTable/UsersTable";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import React from "react";

const AllLostReportPage = () => {
   const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
   const items = data?.data;

   return (
      <>
         {isLoading ? (
            <LoadingSkeleton />
         ) : isError ? (
            <NetworkError />
         ) : (
            items && <UsersTable items={items} />
         )}
      </>
   );
};

export default AllLostReportPage;
