import Dashboard from "@/components/UI/Dashboard/Dashboard";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return <Dashboard>{children}</Dashboard>;
};

export default DashboardLayout;
