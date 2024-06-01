import React from "react";

const DashboardCard = ({ title, value }: { title: string; value: number }) => {
   return (
      <div className="text-xl font-medium text-center flex flex-wrap items-center justify-center min-h-[90px] rounded-xl bg-gray-100 p-6">
         <div>
            <span>{title}</span>
            <span className="ml-2 font-semibold"> {value}</span>
         </div>
      </div>
   );
};

export default DashboardCard;
