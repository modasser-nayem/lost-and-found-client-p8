"use client";

import { useGetMySingleFoundReportQuery } from "@/redux/api/foundItemApi";
import moment from "moment";
import { useParams } from "next/navigation";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaHandshake,
} from "react-icons/fa";
import { IoNotifications, IoTime } from "react-icons/io5";

const MySingleFoundReportPage = () => {
   const params = useParams();

   const { data } = useGetMySingleFoundReportQuery({ id: params.id });

   const item = data?.data;

   return (
      <div className="container mx-auto p-4">
         {item && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
               <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
               </h2>
               <p className="text-gray-700 mb-4">
                  Description: {item.description}
               </p>
               <div className="text-sm text-gray-600 mb-4">
                  <div className="flex items-center mb-1">
                     <FaTag className="mr-2" />
                     <span>Category: {item.category}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaBuilding className="mr-2" />
                     <span>Brand: {item.brand}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaCalendarAlt className="mr-2" />
                     <span>Found Date: {item.foundDate}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaMapMarkerAlt className="mr-2" />
                     <span>Found Location: {item.foundLocation}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaHandshake className="mr-2" />
                     <span className="font-medium mr-1">Give To Owner: </span>
                     <span
                        className={`inline-block py-1 px-2 text-sm font-semibold rounded ${
                           item.giveToOwner === true
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                        }`}
                     >
                        {item.giveToOwner === true ? "success" : "pending"}
                     </span>
                  </div>

                  <div className="flex items-center mb-1">
                     <IoTime className="mr-2" />
                     <span>
                        Post At: {moment(item.createdAt).startOf("h").fromNow()}
                     </span>
                  </div>
               </div>
               <div className="flex items-center mb-1">
                  <IoNotifications className="mr-2" />
                  <span className="font-medium mr-1">
                     Claim Request:{" "}
                     <span className="font-semibold">
                        {item._count.claimItems}
                     </span>
                  </span>
               </div>
               <div className="flex items-center mb-1">
                  <FaHandshake className="mr-2" />
                  <span className="font-medium mr-1">Give To Owner: </span>
                  <span
                     className={`inline-block py-1 px-2 text-sm font-semibold rounded ${
                        item.giveToOwner === true
                           ? "bg-green-200 text-green-800"
                           : "bg-red-200 text-red-800"
                     }`}
                  >
                     {item.giveToOwner === true ? "success" : "pending"}
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default MySingleFoundReportPage;
