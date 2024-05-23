"use client";

import FormWrapper from "@/components/Forms/FormWrapper/FormWrapper";
import InputItem from "@/components/Forms/InputItem/InputItem";
import Button from "@/components/UI/Button";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
   const onSubmit: SubmitHandler<FieldValues> = (formData) => {
      console.log(formData);
   };

   return (
      <div className="flex items-center justify-center">
         <div className="w-[600px] p-10 mt-10">
            <h2 className="text-3xl text-center font-semibold mb-5">Sign In</h2>
            <div className="">
               <FormWrapper onSubmit={onSubmit}>
                  <InputItem
                     type="email"
                     label="Email"
                     name="email"
                     placeholder="Enter your email"
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