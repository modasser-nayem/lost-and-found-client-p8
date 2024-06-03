"use client";

import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import Button from "@/components/UI/Button";
import { isReduxRTQError } from "@/redux/api/baseApi";
import {
   useGetSingleClaimRequestQuery,
   useUpdateClaimRequestStatusMutation,
} from "@/redux/api/claimApi";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { FaCalendarAlt, FaHandshake, FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";

const ClaimRequestDetailsPage = () => {
   const params = useParams();
   const claimId = params?.claimId;

   const {
      data: claimData,
      isLoading: claimItemIsLoading,
      isError: claimItemIsError,
   } = useGetSingleClaimRequestQuery({ id: claimId });

   const claimItem = claimData?.data;

   const [updateClaimRequestStatus, { data: statusData, error: statusError }] =
      useUpdateClaimRequestStatusMutation();

   const handleUpdateStatus = async (formData: any) => {
      try {
         updateClaimRequestStatus(formData);
      } catch (error: any) {
         toast.error("Something went wrong! try again.");
      }
   };

   useEffect(() => {
      if (statusData) {
         toast.success(statusData.message);
      }

      if (isReduxRTQError(statusError)) {
         toast.error(statusError.data.message);
      }
   }, [statusData, statusError]);
   return (
      <div className="container">
         <div className="container mx-auto min-h-screen p-4">
            {claimItemIsLoading ? (
               <LoadingSkeleton />
            ) : claimItemIsError ? (
               <NetworkError />
            ) : (
               claimItem && (
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
                                 {moment(claimItem.createdAt).format(
                                    "DD/MM/YYYY"
                                 )}
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
                        <div className="text-sm text-gray-600 mb-4">
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
                        </div>
                        <div className="mt-5">
                           <h4 className="text-xl font-medium">Action</h4>
                           <div className="flex flex-col gap-4 text-sm text-gray-600 my-2">
                              <div className="mt-4 flex flex-col gap-3">
                                 <Button
                                    onClick={() =>
                                       handleUpdateStatus({
                                          id: claimItem.id,
                                          status: "approved",
                                       })
                                    }
                                    className="text-xs py-1"
                                    variant="outline"
                                 >
                                    Approved
                                 </Button>
                                 <Button
                                    onClick={() =>
                                       handleUpdateStatus({
                                          id: claimItem.id,
                                          status: "rejected",
                                       })
                                    }
                                    className="text-xs py-1"
                                    variant="outline"
                                 >
                                    Rejected
                                 </Button>
                                 <Button
                                    onClick={() =>
                                       handleUpdateStatus({
                                          id: claimItem.id,
                                          status: "pending",
                                       })
                                    }
                                    className="text-xs py-1"
                                    variant="outline"
                                 >
                                    Pending
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default ClaimRequestDetailsPage;
