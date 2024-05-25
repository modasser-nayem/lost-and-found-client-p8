import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TLoginUser, TRegisterUser } from "@/types/auth";

const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      registerUser: build.mutation({
         query: (data: Partial<TRegisterUser>) => ({
            url: "/auth/register",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["auth"],
      }),
      loginUser: build.mutation({
         query: (data: Partial<TLoginUser>) => ({
            url: "/auth/login",
            method: apiMethod.POST,
            body: data,
         }),
      }),
   }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
