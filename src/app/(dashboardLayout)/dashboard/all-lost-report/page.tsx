"use client";

import LostRequestTable from "@/components/UI/Dashboard/LostRequestTable/LostRequestTable";
import { useGetAllLostReportQuery } from "@/redux/api/lostItemApi";
import React from "react";

const AllLostReportPage = () => {
   const { data } = useGetAllLostReportQuery(undefined);
   const items = data?.data;

   return <>{items && <LostRequestTable items={items} />}</>;
};

export default AllLostReportPage;
