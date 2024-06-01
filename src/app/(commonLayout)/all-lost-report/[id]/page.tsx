"use client";

import { useGetSingleLostReportQuery } from "@/redux/api/lostItemApi";
import moment from "moment";
import { useParams } from "next/navigation";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaPhone,
} from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const SingleLostReportPage = () => {
   const params = useParams();

   const { data } = useGetSingleLostReportQuery({ id: params.id });

   const item = data?.data;

   return (
      <div className="container mx-auto p-4">
         {item && (
            <div className="flex flex-col md:flex-row gap-10 max-w-[900px] mx-auto mt-5">
               <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                     {item.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                     Description: {item.description}
                  </p>
               </div>
               <div className="min-w-fit">
                  <div className="text-sm text-gray-600 mb-4">
                     <h4 className="text-lg font-semibold">Key Information</h4>
                     <div className="flex items-center my-1">
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
                           Lost Date:{" "}
                           {moment(item.lostDate).format("DD-MM-YYYY")}
                        </span>
                     </div>
                     <div className="flex items-center mb-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>Lost Location: {item.lostLocation}</span>
                     </div>

                     <div className="flex items-center mb-1">
                        <IoTime className="mr-2" />
                        <span>
                           Post At:{" "}
                           {moment(item.createdAt).startOf("h").fromNow()}
                        </span>
                     </div>
                  </div>
                  <div className="mt-5">
                     <h4 className="text-xl font-medium">
                        Contact Information
                     </h4>
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
            </div>
         )}
      </div>
   );
};

export default SingleLostReportPage;
