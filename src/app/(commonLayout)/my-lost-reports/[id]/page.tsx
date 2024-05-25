"use client";

import { useGetSingleLostReportQuery } from "@/redux/api/lostItemApi";
import { useParams } from "next/navigation";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaUser,
   FaEnvelope,
   FaPhone,
} from "react-icons/fa";

const SingleLostReport = () => {
   const params = useParams();

   const { data } = useGetSingleLostReportQuery({ lostId: params.id });

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
                     <span>Lost Date: {item.lostDate}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaMapMarkerAlt className="mr-2" />
                     <span>Lost Location: {item.lostLocation}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaCalendarAlt className="mr-2" />
                     <span>Found At: {item.foundAt}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaUser className="mr-2" />
                     <span>Reported By: {item.username}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaEnvelope className="mr-2" />
                     <span>Email: {item.email}</span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaPhone className="mr-2" />
                     <span>Phone: {item.phone}</span>
                  </div>
               </div>
               <div className="mt-4">
                  <span
                     className={`inline-block px-2 py-1 text-sm font-semibold rounded ${
                        item.isFound === "true"
                           ? "bg-green-200 text-green-800"
                           : "bg-red-200 text-red-800"
                     }`}
                  >
                     {item.isFound === "true" ? "Found" : "Lost"}
                  </span>
               </div>
            </div>
         )}
      </div>
   );
};

export default SingleLostReport;
