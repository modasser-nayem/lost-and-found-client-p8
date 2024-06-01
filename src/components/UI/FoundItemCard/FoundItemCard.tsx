import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import ClaimModal from "../ClaimModal/ClaimModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useSendClaimRequestMutation } from "@/redux/api/claimApi";

type ItemCardProps = {
   item: TFoundItem;
};

const FoundItemCard = ({ item }: ItemCardProps) => {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);

   const [errors, setErrors] = useState([]);
   const [imgValues, setImgValues] = useState<string[]>([]);

   const [sendClaimRequest, { data, error }] = useSendClaimRequestMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         formData = { ...formData, images: imgValues, itemId: item.id };

         sendClaimRequest(formData);
      } catch (error: any) {
         console.log(error);
         toast.error("An error occurred during report found item.");
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
                  href={`#`}
               >
                  <Image
                     src={item?.user?.photoURL || tempProfileURL}
                     alt={item?.user?.name || "user"}
                     width={45}
                     height={45}
                  />
               </Link>
               <Button
                  onClick={openModal}
                  className="text-xs py-1"
                  variant="outline"
               >
                  Claim
               </Button>

               <Link href={`/all-found-report/${item.id}`}>
                  <Button
                     className="text-xs py-1"
                     variant="outline"
                  >
                     View
                  </Button>
               </Link>
               <ClaimModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  onSubmit={onSubmit}
                  errors={errors}
                  imgValues={imgValues}
                  setImgValues={setImgValues}
                  item={{ id: item.id, title: item.title }}
               />
            </div>
         </div>
      </div>
   );
};

export default FoundItemCard;
