"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton/LoadingSkeleton";
import NetworkError from "@/components/Shared/NetworkError";
import Button from "@/components/UI/Button";
import { isReduxRTQError } from "@/redux/api/baseApi";
import {
   useGetSingleUserQuery,
   useUpdateProfileMutation,
} from "@/redux/api/userApi";
import { useAppSelector } from "@/redux/hook";
import { TUpdateProfile } from "@/types/user";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const UpdateProfilePage = () => {
   const router = useRouter();
   const [errors, setErrors] = useState([]);
   const userId = useAppSelector((state) => state.auth.user?.id);

   const {
      data: userData,
      isLoading: userDataIsLoading,
      isError: userDataIsError,
   } = useGetSingleUserQuery({ id: userId });

   const defaultData: TUpdateProfile = {
      name: userData?.data?.name,
      username: userData?.data?.username,
      email: userData?.data?.email,
      photoURL: userData?.data?.photoURL || undefined,
      phone: userData?.data?.phone || undefined,
   };

   const [updateProfile, { data, error, isSuccess }] =
      useUpdateProfileMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         updateProfile(formData);
      } catch (error: any) {
         toast.error("Something went wrong! try again");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         router.push("/my-profile");
      }
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
         <div className="w-[600px] p-10 mt-10">
            <h2 className="text-3xl text-center font-semibold mb-5">
               Update Profile
            </h2>
            {userDataIsLoading ? (
               <LoadingSkeleton />
            ) : userDataIsError ? (
               <NetworkError />
            ) : (
               <div>
                  <FormWrapper
                     onSubmit={onSubmit}
                     success={isSuccess}
                     errors={errors}
                     defaultValues={defaultData}
                  >
                     <InputItem
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="Enter your name"
                     />
                     <InputItem
                        type="text"
                        label="Username"
                        name="username"
                        placeholder="Enter your username"
                     />
                     <InputItem
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                     />
                     <InputItem
                        type="text"
                        label="Phone"
                        name="phone"
                        placeholder="Enter your phone"
                     />
                     <InputItem
                        type="text"
                        label="PhotoURL"
                        name="photoURL"
                        placeholder="Enter your photoURL"
                     />

                     <Button
                        type="submit"
                        className="w-full mt-5"
                     >
                        Save Change
                     </Button>
                  </FormWrapper>
               </div>
            )}
         </div>
      </div>
   );
};

export default UpdateProfilePage;
