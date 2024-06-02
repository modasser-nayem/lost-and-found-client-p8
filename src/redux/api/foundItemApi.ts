import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import {
   TFoundItem,
   TMyFoundItem,
   TMySingleFoundItem,
   TSingleFoundReport,
   TUpdateFoundReport,
} from "@/types/foundItem";
import { makeQueryParams } from "@/utils/reduxApi";

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
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);

            return {
               url: "/found-items/my",
               method: apiMethod.GET,
               params: params,
            };
         },
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
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: "/found-items",
               method: apiMethod.GET,
               params: params,
            };
         },
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
         query: ({ data, id }: { id: string; data: TUpdateFoundReport }) => ({
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
