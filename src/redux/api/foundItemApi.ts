import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";

const foundItemApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      reportFoundItem: build.mutation({
         query: (data) => ({
            url: "/found-items",
            method: apiMethod.POST,
            body: data,
         }),
      }),
   }),
});

export const { useReportFoundItemMutation } = foundItemApi;
