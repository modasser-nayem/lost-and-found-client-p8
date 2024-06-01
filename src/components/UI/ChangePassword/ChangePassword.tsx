"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import Button from "@/components/UI/Button";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { isReduxRTQError } from "@/redux/api/baseApi";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ChangePassword = () => {
   const [errors, setErrors] = useState([]);

   const [changePassword, { data, error, isSuccess }] =
      useChangePasswordMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         changePassword(formData);
      } catch (error: any) {
         console.log(error);
         toast.error("An error occurred during password change.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
      }
      console.log({ error, data });
      if (isReduxRTQError(error)) {
         if (error?.data?.errorDetails) {
            setErrors(error.data.errorDetails);
         } else {
            toast.error(error.data.message);
         }
      }
   }, [data, error]);

   return (
      <div className="flex items-center justify-center">
         <div className="w-[600px] p-10 mt-10">
            <h2 className="text-3xl text-center font-semibold mb-5">
               Password Change
            </h2>
            <div className="">
               <FormWrapper
                  onSubmit={onSubmit}
                  success={isSuccess}
                  errors={errors}
               >
                  <InputItem
                     type="password"
                     label="Current Password"
                     name="currentPassword"
                     placeholder="Enter current password"
                     required={true}
                  />
                  <InputItem
                     type="password"
                     label="New Password"
                     name="newPassword"
                     placeholder="Enter new password"
                     required={true}
                  />
                  <InputItem
                     type="password"
                     label="Confirm Password"
                     name="confirmPassword"
                     placeholder="Retype new password"
                     required={true}
                  />
                  <Button
                     type="submit"
                     className="w-full mt-5"
                  >
                     Save Password
                  </Button>
               </FormWrapper>
            </div>
         </div>
      </div>
   );
};

export default ChangePassword;
