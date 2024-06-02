"use client";

import FoundItemTable from "@/components/UI/Dashboard/FoundItemTable/FoundItemTable";
import { useGetAllFoundReportQuery } from "@/redux/api/foundItemApi";
import React from "react";

const AllFoundReportPage = () => {
   const { data } = useGetAllFoundReportQuery(undefined);
   const items = data?.data;

   return <>{items && <FoundItemTable items={items} />}</>;
};

export default AllFoundReportPage;
