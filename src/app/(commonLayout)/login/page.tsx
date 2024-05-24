"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import Button from "@/components/UI/Button";
import { loginUser } from "@/services/actions/auth";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
   const router = useRouter();
   const [errors, setErrors] = useState([]);
   const [isSuccess, setIsSuccess] = useState(false);

   const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
      try {
         const res = await loginUser(formData);

         console.log(res);

         if (!res?.errorDetails && res.success === false) {
            toast.error(res.message);
         }

         if (res?.errorDetails) {
            setErrors(res.errorDetails);
         }

         const token = res?.data?.access_token;
         if (token) {
            toast.success(res.message);
            storeUserInfo({ access_token: token });
            setIsSuccess(true);
         }
      } catch (error: any) {
         console.log(error);
         toast.error("An error occurred during login.");
      }
   };

   useEffect(() => {
      if (isSuccess) {
         router.push("/");
      }
   }, [isSuccess, router]);

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
