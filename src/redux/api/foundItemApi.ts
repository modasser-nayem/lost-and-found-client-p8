import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TMyFoundItem, TMySingleFoundItem } from "@/types/foundItem";

const foundItemApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      reportFoundItem: build.mutation({
         query: (data) => ({
            url: "/found-items",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["found-items"],
      }),
      getMyAllFoundReport: build.query<TRtqQueryResponse<TMyFoundItem[]>, any>({
         query: () => ({
            url: "/found-items/my",
            method: apiMethod.GET,
         }),
      }),
      getMySingleFoundReport: build.query<
         TRtqQueryResponse<TMySingleFoundItem>,
         any
      >({
         query: ({ id }) => ({
            url: `/found-items/my/${id}`,
            method: apiMethod.GET,
         }),
      }),
      // incomplete
      getAllFoundReport: build.query({
         query: () => ({
            url: "/lost-items",
            method: apiMethod.GET,
         }),
         providesTags: ["found-items"],
      }),
      updateFoundReport: build.mutation({
         query: ({ data, lostId }) => ({
            url: `/found-items/${lostId}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["lost-items"],
      }),
      deleteFoundReport: build.mutation({
         query: ({ lostId }) => ({
            url: `/found-items/${lostId}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["found-items"],
      }),
   }),
});

export const {
   useReportFoundItemMutation,
   useGetMyAllFoundReportQuery,
   useGetMySingleFoundReportQuery,
} = foundItemApi;
