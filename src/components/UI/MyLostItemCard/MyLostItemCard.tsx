import Link from "next/link";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
} from "react-icons/fa";
import Button from "../Button";
import moment from "moment";

type Item = {
   id: string;
   title: string;
   category: string;
   brand: string;
   images: string[];
   lostDate: string;
   lostLocation: string;
   isFound: string;
   createdAt: string;
   updatedAt: string;
};

type ItemCardProps = {
   item: Item;
};

const MyLostItemCard = ({ item }: ItemCardProps) => {
   return (
      <div className="bg-white shadow-xl rounded-lg p-6 mb-4">
         <div className="flex flex-col justify-between h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
               {item.title.slice(0, 70)}
            </h2>
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
               {item.isFound && (
                  <div className="flex items-center mb-1">
                     <FaCalendarAlt className="mr-2" />
                     <span>
                        Found Date: {moment(item.isFound).format("DD-MM-YYYY")}
                     </span>
                  </div>
               )}
            </div>
            <div className="mt-4 flex items-center justify-between">
               <p
                  className={`inline-block px-4 py-2 text-sm font-semibold rounded ${
                     item.isFound === "true"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                  }`}
               >
                  {item.isFound === "true" ? "Found" : "Lost"}
               </p>
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
