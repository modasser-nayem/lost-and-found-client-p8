"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaEdit,
} from "react-icons/fa";
import Button from "../Button";
import moment from "moment";
import { TMyLostItem } from "@/types/lostItem";
import { IoTime } from "react-icons/io5";
import { useMarkAsFoundLostItemMutation } from "@/redux/api/lostItemApi";
import { toast } from "sonner";
import { isReduxRTQError } from "@/redux/api/baseApi";

type ItemCardProps = {
   item: TMyLostItem;
};

const MyLostItemCard = ({ item }: ItemCardProps) => {
   const [markAsFoundLostItem, { data, error, isLoading }] =
      useMarkAsFoundLostItemMutation();

   const handleMarkAsFound = (id: string) => {
      try {
         markAsFoundLostItem({ id });
      } catch (error) {
         toast.error("An error occurred during mark as found.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
      }
      if (isReduxRTQError(error)) {
         toast.error(error.data.message);
      }
   }, [data, error]);

   return (
      <div className="bg-white border-4 border-primary shadow-xl hover:shadow-2xl rounded-lg p-6 mb-4">
         <div className="flex flex-col justify-between h-full relative">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
               {item.title.slice(0, 70)}
            </h2>
            <Link
               className="absolute right-0 top-0 backdrop-blur-md"
               href={`/update-lost-report/${item.id}`}
            >
               <FaEdit size={25} />
            </Link>
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
                     Lost Date: {moment(item.lostDate).format("DD-MM-YYYY")}
                  </span>
               </div>
               <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Location: {item.lostLocation}</span>
               </div>
               <div className="flex items-center mb-1">
                  <IoTime className="mr-2" />
                  <span>
                     Post At: {moment(item.createdAt).startOf("h").fromNow()}
                  </span>
               </div>
               <p className="mb-1 text-lg">
                  <span className="font-medium">Status: </span>
                  <span
                     className={`inline-block py-1 px-3 text-sm font-semibold rounded ${
                        item.isFound === true
                           ? "bg-green-200 text-green-800"
                           : "bg-red-200 text-red-800"
                     }`}
                  >
                     {item.isFound === true ? "Found" : "Lost"}
                  </span>
               </p>
               {item.foundAt && (
                  <div className="flex items-center mb-1">
                     <FaCalendarAlt className="mr-2" />
                     <span>
                        Found Date: {moment(item.foundAt).format("DD-MM-YYYY")}
                     </span>
                  </div>
               )}
            </div>
            <div className="mt-4 flex items-center justify-between">
               <Button
                  loading={isLoading}
                  className="text-xs py-1"
                  variant="outline"
                  onClick={() => handleMarkAsFound(item.id)}
               >
                  Mark as {item.isFound ? "Lost" : "Found"}
               </Button>
               <Link href={`/my-lost-reports/${item.id}`}>
                  <Button
                     className="text-xs py-1"
                     variant="outline"
                  >
                     View
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default MyLostItemCard;
