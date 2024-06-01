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
import { IoTime } from "react-icons/io5";
import { TLostItem } from "@/types/lostItem";

type ItemCardProps = {
   item: TLostItem;
};

const LostItemCard = ({ item }: ItemCardProps) => {
   return (
      <div className="bg-white border-4 border-primary hover:shadow-2xl rounded-lg p-6 mb-4">
         <div className="flex flex-col justify-between h-full relative">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
               {item.title.slice(0, 70)}
            </h2>
            <p>{item.description}</p>
            <div className="text-sm text-gray-600 my-2">
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
            </div>
            <div className="mt-4 flex items-center justify-between">
               <Link
                  href={`/all-lost-report/${item.id}`}
                  className="w-full"
               >
                  <Button
                     className="text-xs py-1 w-full"
                     variant="outline"
                  >
                     View Details
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default LostItemCard;
