import DashboardCard from "@/components/UI/Dashboard/DashboardPage/DashboardCard";
import React from "react";

const DashboardPage = () => {
   return (
      <div>
         <div className="grid grid-cols-3 gap-10">
            <DashboardCard
               title="Total Lost Claim"
               value={50}
            />
            <DashboardCard
               title="Total Lost Found"
               value={50}
            />
            <DashboardCard
               title="Total Pending Claim"
               value={50}
            />
         </div>
      </div>
   );
};

export default DashboardPage;
