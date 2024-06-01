import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TLostItem, TMyLostItem, TSingleLostItem } from "@/types/lostItem";

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
         query: () => ({
            url: "/lost-items/my",
            method: apiMethod.GET,
         }),
         providesTags: ["lost-items"],
      }),
      getAllLostReport: build.query<TRtqQueryResponse<TLostItem[]>, any>({
         query: () => ({
            url: "/lost-items",
            method: apiMethod.GET,
         }),
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
         query: ({ data, id }) => ({
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
