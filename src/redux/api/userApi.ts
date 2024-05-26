import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TMyProfile } from "@/types/user";

const userApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMyProfile: build.query<TRtqQueryResponse<TMyProfile>, any>({
         query: () => ({
            url: "/users/me",
            method: apiMethod.GET,
         }),
         providesTags: ["users"],
      }),
   }),
});

export const { useGetMyProfileQuery } = userApi;
