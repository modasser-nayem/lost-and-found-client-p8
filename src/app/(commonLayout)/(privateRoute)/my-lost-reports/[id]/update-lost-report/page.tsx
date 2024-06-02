"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import InputTextArea from "@/components/Forms/InputTextArea/InputTextArea";
import Button from "@/components/UI/Button";
import MultipleInputSelect from "@/components/Forms/MultipleInputSelect/MultipleInputSelect";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { useUpdateLostReportMutation } from "@/redux/api/lostItemApi";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UpdateLostReportPage = () => {
   const router = useRouter();
   const params = useParams();
   const lostReportId = params.id as string;
   const [errors, setErrors] = useState([]);
   const [imgValues, setImgValues] = useState<string[]>([]);

   const [updateLostReport, { data, error }] = useUpdateLostReportMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         if (formData.lostDate) {
            formData.lostDate = new Date(formData.lostDate).toISOString();
         }
         formData = { ...formData, images: imgValues };

         updateLostReport({ id: lostReportId, data: formData });
      } catch (error: any) {
         console.log(error);
         toast.error("Something went wrong! try again.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         router.push("/my-lost-reports");
      }
      console.log({ error, data });
      if (isReduxRTQError(error)) {
         if (error?.data?.errorDetails) {
            setErrors(error.data.errorDetails);
         } else {
            toast.error(error.data.message);
         }
      }
   }, [data, error, router]);

   return (
      <div className="flex items-center justify-center">
         <div className="w-[800px] p-10 mt-10">
            <FormWrapper
               onSubmit={onSubmit}
               success={data?.success ? true : false}
               errors={errors}
            >
               <h2 className="text-2xl font-semibold mb-5">
                  Update a Lost Report
               </h2>
               <div className="flex justify-between gap-10">
                  <div className="flex-1">
                     <InputItem
                        type="text"
                        label="Title"
                        name="title"
                        placeholder="What was lost"
                     />
                     <InputItem
                        type="text"
                        label="Category"
                        name="category"
                        placeholder="Enter item category"
                     />
                     <InputItem
                        type="text"
                        label="Brand"
                        name="brand"
                        placeholder="Enter item brand"
                     />
                     <InputTextArea
                        label="Description"
                        name="description"
                        placeholder="Enter item description"
                     />
                  </div>
                  <div className="flex-1">
                     <InputItem
                        type="date"
                        label="Lost Date"
                        name="lostDate"
                     />
                     <InputItem
                        type="text"
                        label="Location"
                        name="lostLocation"
                        placeholder="Where is it lost"
                     />
                     <MultipleInputSelect
                        label="Image URL"
                        values={imgValues}
                        onChange={setImgValues}
                     />
                  </div>
               </div>
               <h2 className="text-2xl font-semibold my-5">
                  Contact Information
               </h2>
               <div className="flex justify-between gap-10">
                  <div className="flex-1">
                     <InputItem
                        type="text"
                        label="Name"
                        name="username"
                        placeholder="Enter your name"
                     />
                     <InputItem
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div className="flex-1">
                     <InputItem
                        type="text"
                        label="Phone No"
                        name="phone"
                        placeholder="Enter your phone no"
                     />
                  </div>
               </div>
               <Button
                  type="submit"
                  className="mt-5"
               >
                  Save Change
               </Button>
            </FormWrapper>
         </div>
      </div>
   );
};

export default UpdateLostReportPage;
