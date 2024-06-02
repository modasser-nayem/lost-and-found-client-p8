import { TMyClaimItem } from "@/types/claim";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
   FaCalendarAlt,
   FaEdit,
   FaHandshake,
   FaMapMarkerAlt,
} from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Button from "../Button";
import { MdOutlineTitle } from "react-icons/md";
import UpdateClaimModal from "../UpdateClaimModal/UpdateClaimModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useUpdateClaimRequestMutation } from "@/redux/api/claimApi";

type ItemCardProps = {
   item: TMyClaimItem;
};

const MyClaimItemCard = ({ item }: ItemCardProps) => {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);

   const [errors, setErrors] = useState([]);
   const [imgValues, setImgValues] = useState<string[]>([]);

   const [updateClaimRequest, { data, error }] =
      useUpdateClaimRequestMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         formData = { ...formData, images: imgValues, itemId: item.id };

         updateClaimRequest({ id: item.id, data: formData });
      } catch (error: any) {
         console.log(error);
         toast.error("Something went wrong! try again.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         setModalOpen(false);
      }
      if (isReduxRTQError(error)) {
         if (error?.data?.errorDetails) {
            setErrors(error.data.errorDetails);
         } else {
            toast.error(error.data.message);
         }
      }
   }, [data, error]);

   return (
      <div className="bg-white border-4 border-primary shadow-xl hover:shadow-2xl rounded-lg p-6 mb-4 relative">
         {item.status === "pending" && (
            <button
               onClick={openModal}
               className="text-xs py-1 absolute right-4 top-3 backdrop-blur-md"
            >
               <FaEdit size={25} />
            </button>
         )}
         <UpdateClaimModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onSubmit={onSubmit}
            errors={errors}
            imgValues={imgValues}
            setImgValues={setImgValues}
         />
         <div className="flex flex-col justify-between h-full">
            <p className="mb-3"> Description: {item.description}</p>
            <div className="text-sm text-gray-600 mb-4">
               <div className="flex items-center mb-1">
                  <FaHandshake className="mr-2" />
                  <span className="font-medium mr-1">Status: </span>
                  <span
                     className={`inline-block py-1 px-2 text-sm font-semibold rounded ${
                        item.status === "approved"
                           ? "bg-green-200 text-green-800"
                           : item.status === "rejected"
                           ? "bg-red-200 text-red-800"
                           : "bg-blue-200 text-blue-800"
                     }`}
                  >
                     {item.status}
                  </span>
               </div>
               {item.statusUpdateAt && (
                  <div className="flex items-center mb-1">
                     <IoTime className="mr-2" />
                     <span>
                        Request {item.status} At:{" "}
                        {moment(item.statusUpdateAt).format("DD/MM/YYYY")}
                     </span>
                  </div>
               )}
               <div className="flex items-center mb-1">
                  <IoTime className="mr-2" />
                  <span>
                     Request At: {moment(item.createdAt).startOf("h").fromNow()}
                  </span>
               </div>
            </div>
            <div className="text-sm text-gray-600 mb-4">
               <h4 className="text-lg font-semibold mb-2">Item Information</h4>
               <div className="flex items-center mb-1">
                  <MdOutlineTitle className="mr-2" />
                  <span>Title: {item.item.title}</span>
               </div>
               <div className="flex items-center mb-1">
                  <FaCalendarAlt className="mr-2" />
                  <span>
                     Found Date:{" "}
                     {moment(item.item.foundDate).format("DD/MM/YYYY")}
                  </span>
               </div>
               <div className="flex items-center mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Found Location: {item.item.foundLocation}</span>
               </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
               <Link
                  className="w-full"
                  href={`/my-claim-request/${item.id}`}
               >
                  <Button
                     className="text-xs py-1 w-full"
                     variant="outline"
                  >
                     Claim Details
                  </Button>
               </Link>
               <Link
                  className="w-full"
                  href={`/all-found-report/${item.item.id}`}
               >
                  <Button
                     className="text-xs py-1 w-full"
                     variant="outline"
                  >
                     Item Details
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default MyClaimItemCard;
