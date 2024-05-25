"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import Button from "@/components/UI/Button";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { isReduxRTQError } from "@/redux/api/baseApi";
import { TDecodeUser, setUser } from "@/redux/features/auth";
import { useAppDispatch } from "@/redux/hook";
import { decodedToken } from "@/utils/jwt";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
   const router = useRouter();
   const [errors, setErrors] = useState([]);
   const dispatch = useAppDispatch();

   const [loginUser, { data, error, isSuccess }] = useLoginUserMutation();

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         loginUser(formData);
      } catch (error: any) {
         console.log(error);
         toast.error("An error occurred during login.");
      }
   };

   useEffect(() => {
      if (data) {
         toast.success(data.message);
         const token = data?.data?.access_token as string;
         const user = decodedToken(token) as TDecodeUser;
         dispatch(setUser({ token: token, user }));
         router.push("/");
      }
      console.log({ error, data });
      if (isReduxRTQError(error)) {
         if (error?.data?.errorDetails) {
            setErrors(error.data.errorDetails);
         } else {
            toast.error(error.data.message);
         }
      }
   }, [data, error, router, dispatch]);

   return (
      <div className="flex items-center justify-center">
         <div className="w-[600px] p-10 mt-10">
            <h2 className="text-3xl text-center font-semibold mb-5">Sign In</h2>
            <div className="">
               <FormWrapper
                  onSubmit={onSubmit}
                  success={isSuccess}
                  errors={errors}
               >
                  <InputItem
                     type="text"
                     label="Email or Username"
                     name="emailOrUsername"
                     placeholder="Enter your email or username"
                     required={true}
                  />
                  <InputItem
                     type="password"
                     label="Password"
                     name="password"
                     placeholder="Enter your password"
                     required={true}
                  />
                  <Button
                     type="submit"
                     className="w-full mt-5"
                  >
                     Sign in
                  </Button>
                  <p className="text-center text-gray-500 mt-4">
                     Don’t have any account.
                     <Link
                        href="/register"
                        className="font-semibold text-gray-800 hover:text-primary"
                     >
                        Sign Up
                     </Link>
                  </p>
               </FormWrapper>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;
