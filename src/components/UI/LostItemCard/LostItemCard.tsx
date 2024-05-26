import Link from "next/link";
import React from "react";
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

type ItemCardProps = {
   item: TMyLostItem;
};

const LostItemCard = ({ item }: ItemCardProps) => {
   return (
      <div className="bg-white border-4 border-primary shadow-xl hover:shadow-2xl rounded-lg p-6 mb-4">
         <div className="flex flex-col justify-between h-full relative">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
               {item.title.slice(0, 70)}
            </h2>
            <Link
               className="absolute right-0 top-0"
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
                  disabled={item.isFound}
                  className="text-xs py-1"
                  variant="outline"
               >
                  Mark as Found
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

export default LostItemCard;
