"use client";

import { useGetSingleFoundReportQuery } from "@/redux/api/foundItemApi";
import moment from "moment";
import { useParams } from "next/navigation";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaPhone,
} from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoNotifications, IoTime } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const SingleFoundReportPage = () => {
   const params = useParams();

   const { data } = useGetSingleFoundReportQuery({ id: params.id });

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
                     <span>
                        Found Date:{" "}
                        {moment(item.foundDate).format("DD-MM-YYYY")}
                     </span>
                  </div>
                  <div className="flex items-center mb-1">
                     <FaMapMarkerAlt className="mr-2" />
                     <span>Found Location: {item.foundLocation}</span>
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
               <div className="mt-5">
                  <h4 className="text-xl font-medium">Contact Information</h4>
                  <div className="text-sm text-gray-600 mb-4">
                     <div className="flex items-center mb-1">
                        <IoIosPerson className="mr-2" />
                        <span>Name: {item?.username || ""}</span>
                     </div>
                     <div className="flex items-center mb-1">
                        <MdEmail className="mr-2" />
                        <span>Email: {item.email}</span>
                     </div>
                     <div className="flex items-center mb-1">
                        <FaPhone className="mr-2" />
                        <span>Phone: {item?.phone || ""}</span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default SingleFoundReportPage;
