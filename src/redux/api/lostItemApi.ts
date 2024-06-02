import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import {
   TLostItem,
   TMyLostItem,
   TSingleLostItem,
   TUpdateLostReport,
} from "@/types/lostItem";
import { makeQueryParams } from "@/utils/reduxApi";

const lostItemApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      reportLostReport: build.mutation({
         query: (data) => ({
            url: "/lost-items",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["lost-items"],
      }),
      getMyAllLostReport: build.query<TRtqQueryResponse<TMyLostItem[]>, any>({
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: "/lost-items/my",
               method: apiMethod.GET,
               params: params,
            };
         },
         providesTags: ["lost-items"],
      }),
      getAllLostReport: build.query<TRtqQueryResponse<TLostItem[]>, any>({
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: "/lost-items",
               method: apiMethod.GET,
               params: params,
            };
         },
         providesTags: ["lost-items"],
      }),
      getSingleLostReport: build.query<TRtqQueryResponse<TSingleLostItem>, any>(
         {
            query: ({ id }: { id: string }) => ({
               url: `/lost-items/${id}`,
               method: apiMethod.GET,
            }),
         }
      ),
      updateLostReport: build.mutation({
         query: ({ data, id }: { id: string; data: TUpdateLostReport }) => ({
            url: `/lost-items/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["lost-items"],
      }),
      deleteLostReport: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/lost-items/${id}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["lost-items"],
      }),
      markAsFoundLostItem: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/lost-items/${id}`,
            method: apiMethod.PATCH,
         }),
         invalidatesTags: ["lost-items"],
      }),
   }),
});

export const {
   useReportLostReportMutation,
   useGetMyAllLostReportQuery,
   useGetAllLostReportQuery,
   useGetSingleLostReportQuery,
   useUpdateLostReportMutation,
   useMarkAsFoundLostItemMutation,
   useDeleteLostReportMutation,
} = lostItemApi;
