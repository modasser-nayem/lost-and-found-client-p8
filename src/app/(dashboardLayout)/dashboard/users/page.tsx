"use client";

import UsersTable from "@/components/UI/Dashboard/UsersTable/UsersTable";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import React from "react";

const AllLostReportPage = () => {
   const { data } = useGetAllUsersQuery(undefined);
   const items = data?.data;

   return <>{items && <UsersTable items={items} />}</>;
};

export default AllLostReportPage;
