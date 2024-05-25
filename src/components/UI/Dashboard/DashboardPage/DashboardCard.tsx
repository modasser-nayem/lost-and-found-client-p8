import React from "react";

const DashboardCard = ({ title, value }: { title: string; value: number }) => {
   return (
      <h2 className="text-xl font-medium text-center flex items-center justify-center min-h-[100px] rounded-xl bg-gray-100 p-10">
         <div>
            <span>{title}</span>
            <span className="ml-2 font-semibold"> {value}</span>
         </div>
      </h2>
   );
};

export default DashboardCard;
