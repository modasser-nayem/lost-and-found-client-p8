"use client";

import LostItemTable from "@/components/UI/Dashboard/LostItemTable/LostItemTable";
import { useGetAllLostReportQuery } from "@/redux/api/lostItemApi";
import React from "react";

const AllLostReportPage = () => {
   const { data } = useGetAllLostReportQuery(undefined);
   const items = data?.data;

   return <>{items && <LostItemTable items={items} />}</>;
};

export default AllLostReportPage;
