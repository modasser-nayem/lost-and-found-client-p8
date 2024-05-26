import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import {
   TFoundItem,
   TMyFoundItem,
   TMySingleFoundItem,
   TSingleFoundReport,
} from "@/types/foundItem";

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
      getAllFoundReport: build.query<TRtqQueryResponse<TFoundItem[]>, any>({
         query: () => ({
            url: "/found-items",
            method: apiMethod.GET,
         }),
         providesTags: ["found-items"],
      }),
      getSingleFoundReport: build.query<
         TRtqQueryResponse<TSingleFoundReport>,
         any
      >({
         query: ({ id }) => ({
            url: `/found-items/${id}`,
            method: apiMethod.GET,
         }),
      }),
      updateFoundReport: build.mutation({
         query: ({ data, id }) => ({
            url: `/found-items/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["found-items"],
      }),
      deleteFoundReport: build.mutation({
         query: ({ id }) => ({
            url: `/found-items/${id}`,
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
   useGetAllFoundReportQuery,
   useGetSingleFoundReportQuery,
   useUpdateFoundReportMutation,
   useDeleteFoundReportMutation,
} = foundItemApi;
