"use client";

import { useGetSingleClaimRequestQuery } from "@/redux/api/claimApi";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { FaCalendarAlt, FaHandshake } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const MySingleClaimRequestPage = () => {
   const params = useParams();
   const claimId = params.id;

   const { data: claimData } = useGetSingleClaimRequestQuery({ id: claimId });

   const claimItem = claimData?.data;

   return (
      <div className="container">
         <div className="container mx-auto min-h-screen p-4">
            {claimItem && (
               <div className="flex flex-col-reverse md:flex-row gap-10 max-w-[1200px] mx-auto mt-5">
                  <div>
                     <p className="text-gray-700 mb-4">
                        Description: {claimItem.description}
                     </p>
                     {claimItem.images && (
                        <div className="flex flex-wrap gap-5">
                           {claimItem.images.map((imgUrl, i) => (
                              <Image
                                 key={i}
                                 src={imgUrl}
                                 alt="dd"
                                 width={200}
                                 height={200}
                                 className="border-2 rounded-md p-2 lg:p-5 w-[120px] lg:w-[200px]"
                              />
                           ))}
                        </div>
                     )}
                     <div className="my-3">
                        <h3 className="text-xl font-semibold mb-2">
                           Product Invoice:
                        </h3>
                        <Image
                           src={claimItem.productInvoice}
                           alt="dd"
                           width={800}
                           height={200}
                        />
                     </div>
                  </div>
                  <div className="min-w-fit">
                     <div className="text-sm text-gray-600 mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                           Key Information
                        </h4>
                        <div className="flex items-center mb-1">
                           <FaCalendarAlt className="mr-2" />
                           <span>
                              Request At:{" "}
                              {moment(claimItem.createdAt).format("DD/MM/YYYY")}
                           </span>
                        </div>

                        <div className="flex items-center mb-1">
                           <FaHandshake className="mr-2" />
                           <span className="font-medium mr-1">Status: </span>
                           <span
                              className={`inline-block py-1 px-2 text-sm font-semibold rounded ${
                                 claimItem.status === "approved"
                                    ? "bg-green-200 text-green-800"
                                    : claimItem.status === "rejected"
                                    ? "bg-red-200 text-red-800"
                                    : "bg-blue-200 text-blue-800"
                              }`}
                           >
                              {claimItem.status}
                           </span>
                        </div>
                        {claimItem.statusUpdateAt && (
                           <div className="flex items-center mb-1">
                              <IoTime className="mr-2" />
                              <span>
                                 Request {claimItem.status} At:{" "}
                                 {moment(claimItem.statusUpdateAt).format(
                                    "DD/MM/YYYY"
                                 )}
                              </span>
                           </div>
                        )}
                     </div>
                     {/* <div className="text-sm text-gray-600 mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                           Contact Information
                        </h4>
                        <div className="flex items-center mb-1">
                           <FaUser className="mr-2" />
                           <span>Name: {claimItem.user.name}</span>
                        </div>
                        <div className="flex items-center mb-1">
                           <MdEmail className="mr-2" />
                           <span>Email: {claimItem.user.email}</span>
                        </div>
                        <div className="flex items-center mb-1">
                           <FaPhone className="mr-2" />
                           <span>Phone: {claimItem.user.phone}</span>
                        </div>
                     </div> */}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default MySingleClaimRequestPage;
