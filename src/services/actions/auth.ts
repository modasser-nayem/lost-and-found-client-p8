"use server";

import { apiMethod } from "@/constants/apiMethod";
import { authKey } from "@/constants/auth";
import { TLoginUser, TRegisterUser } from "@/types/auth";
import { cookies } from "next/headers";

const apiURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const registerUser = async (data: Partial<TRegisterUser>) => {
   const res = await fetch(`${apiURL}/auth/register`, {
      method: apiMethod.POST,
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
   });

   const result = await res.json();

   return result;
};

export const loginUser = async (data: Partial<TLoginUser>) => {
   const res = await fetch(`${apiURL}/auth/login`, {
      method: apiMethod.POST,
      body: JSON.stringify(data),
      headers: {
         "Content-type": "application/json",
      },
      credentials: "include",
   });

   const result = await res.json();
   const token = result?.data?.access_token;
   if (token) {
      cookies().set(authKey, token);
   }

   return result;
};
