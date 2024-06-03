"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import Button from "@/components/UI/Button";
import { isReduxRTQError } from "@/redux/api/baseApi";
import {
   useDeleteFoundReportMutation,
   useGetMySingleFoundReportQuery,
} from "@/redux/api/foundItemApi";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import {
   FaCalendarAlt,
   FaMapMarkerAlt,
   FaTag,
   FaBuilding,
   FaHandshake,
} from "react-icons/fa";
import { IoNotifications, IoTime } from "react-icons/io5";
import { toast } from "sonner";

const MySingleFoundReportPage = () => {
   const params = useParams();
   const router = useRouter();

   const {
      data,
      isLoading: itemIsLoading,
      isError: itemIsError,
   } = useGetMySingleFoundReportQuery({ id: params.id });
   const item = data?.data;

   const [
      deleteFoundReport,
      { data: deleteData, error: deleteError, isLoading: deleteLoading },
   ] = useDeleteFoundReportMutation();

   const handleDeleteFoundReport = (id: string) => {
      try {
         deleteFoundReport({ id });
      } catch (error) {
         toast.error("An error occurred during delete found report.");
      }
   };

   useEffect(() => {
      if (deleteData) {
         toast.success(deleteData.message);
         router.back();
      }
      if (isReduxRTQError(deleteError)) {
         toast.error(deleteError.data.message);
      }
   }, [deleteData, deleteError, router]);

   return (
      <div className="container mx-auto min-h-screen p-4">
         {itemIsLoading ? (
            <LoadingSkeleton />
         ) : itemIsError ? (
            <NetworkError />
         ) : (
            item && (
               <div className="flex flex-col md:flex-row gap-10 max-w-[1200px] mx-auto mt-5">
                  <div>
                     <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                     </h2>
                     <p className="text-gray-700 mb-4">
                        Description: {item.description}
                     </p>
                     {item.images && (
                        <div className="flex flex-wrap gap-5">
                           {item.images.map((imgUrl, i) => (
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
                  </div>
                  <div className="min-w-fit">
                     <div className="text-sm text-gray-600 mb-4">
                        <h4 className="text-lg font-semibold">
                           Key Information
                        </h4>
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
                              Found Date:{" "}
                              {moment(item.foundDate).format("DD/MM/YYYY")}
                           </span>
                        </div>
                        <div className="flex items-center mb-1">
                           <FaMapMarkerAlt className="mr-2" />
                           <span>Found Location: {item.foundLocation}</span>
                        </div>
                        <div className="flex items-center mb-1">
                           <FaHandshake className="mr-2" />
                           <span className="font-medium mr-1">
                              Give To Owner:{" "}
                           </span>
                           <span
                              className={`inline-block p-1 text-sm font-semibold rounded ${
                                 item.giveToOwner === true
                                    ? "bg-green-200 text-green-800"
                                    : "bg-red-200 text-red-800"
                              }`}
                           >
                              {item.giveToOwner === true
                                 ? "success"
                                 : "pending"}
                           </span>
                        </div>

                        <div className="flex items-center mb-1">
                           <IoTime className="mr-2" />
                           <span>
                              Post At:{" "}
                              {moment(item.createdAt).startOf("h").fromNow()}
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
                        <h4 className="text-xl font-medium">Action</h4>
                        <div className="flex flex-col gap-4 text-sm text-gray-600 my-2">
                           <Link
                              href={`/my-found-reports/${item.id}/claim-request`}
                              className="w-full"
                           >
                              <Button
                                 className="text-xs py-1 w-full"
                                 variant="outline"
                              >
                                 See Claim Request
                              </Button>
                           </Link>
                           <Button
                              className="text-xs py-1"
                              onClick={() => handleDeleteFoundReport(item.id)}
                              loading={deleteLoading}
                              variant="outline"
                           >
                              Delete Report
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         )}
      </div>
   );
};

export default MySingleFoundReportPage;
