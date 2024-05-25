import React from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="container flex">
         <div className=" bg-gray-100 h-screen p-5">
            <DashboardSidebar />
         </div>
         <div className="border-2 border-gray-500 flex-1">
            <DashboardHeader />
            <div className="p-5">{children}</div>
         </div>
      </div>
   );
};

export default Dashboard;
