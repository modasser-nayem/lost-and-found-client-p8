import Link from "next/link";
import React from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
} from "react-icons/fa";
import { IoNotifications, IoTime } from "react-icons/io5";
import Button from "../Button";
import moment from "moment";
import { TFoundItem } from "@/types/foundItem";
import Image from "next/image";
import tempProfileURL from "@/assets/profile.png";

type ItemCardProps = {
   item: TFoundItem;
};

const FoundItemCard = ({ item }: ItemCardProps) => {
   console.log(item);
   return (
      <div className="bg-white border-4 border-primary shadow-xl hover:shadow-2xl rounded-lg p-6 mb-4">
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
                     Found Date: {moment(item.foundDate).format("DD-MM-YYYY")}
                  </span>
               </div>
               <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Location: {item.foundLocation}</span>
               </div>
               <div className="flex items-center mb-1">
                  <IoTime className="mr-2" />
                  <span>
                     Post At: {moment(item.createdAt).startOf("h").fromNow()}
                  </span>
               </div>
               <div className="flex items-center mb-1"></div>
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
               <Link
                  title={item?.user?.name}
                  href={`/my-claim-request/${item.user.id}`}
               >
                  <Image
                     src={item?.user?.photoURL || tempProfileURL}
                     alt={item?.user?.name || "user"}
                     width={45}
                     height={45}
                  />
               </Link>
               <Link href={`/claim-found-item/${item.id}`}>
                  <Button
                     className="text-xs py-1"
                     variant="outline"
                  >
                     Claim
                  </Button>
               </Link>
               <Link href={`/all-found-report/${item.id}`}>
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

export default FoundItemCard;
