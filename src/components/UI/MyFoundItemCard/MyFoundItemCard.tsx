import Link from "next/link";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaEdit,
   FaHandshake,
} from "react-icons/fa";
import { IoNotifications, IoTime } from "react-icons/io5";
import Button from "../Button";
import moment from "moment";
import { TMyFoundItem } from "@/types/foundItem";

type ItemCardProps = {
   item: TMyFoundItem;
};

const MyFoundItemCard = ({ item }: ItemCardProps) => {
   return (
      <div className="bg-white border-4 border-primary shadow-xl hover:shadow-2xl rounded-lg p-6 mb-4">
         <div className="flex flex-col justify-between h-full relative">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
               {item.title.slice(0, 70)}
            </h2>
            <Link
               className="absolute right-0 top-0"
               href={`/update-found-report/${item.id}`}
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
                     Found Date: {moment(item.foundDate).format("DD-MM-YYYY")}
                  </span>
               </div>
               <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Location: {item.foundLocation}</span>
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
            <div className="mt-4 flex items-center justify-between">
               <Link href={`/my-claim-request/${item.id}`}>
                  <Button
                     className="text-xs py-1"
                     variant="outline"
                  >
                     Claim Request
                  </Button>
               </Link>
               <Link href={`/my-found-reports/${item.id}`}>
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

export default MyFoundItemCard;
