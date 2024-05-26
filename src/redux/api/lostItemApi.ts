import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TMyLostItem } from "@/types/lostItem";

type MySingleLostItem = {
   id: string;
   title: string;
   description: string;
   category: string;
   brand: string;
   images: string[];
   lostDate: string;
   lostLocation: string;
   foundAt: string;
   isFound: string;
   username: string;
   email: string;
   phone: string;
   createdAt: string;
   updatedAt: string;
};

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
      getAllLostReport: build.query({
         query: () => ({
            url: "/lost-items",
            method: apiMethod.GET,
         }),
         providesTags: ["lost-items"],
      }),
      getSingleLostReport: build.query<
         TRtqQueryResponse<MySingleLostItem>,
         any
      >({
         query: ({ lostId }) => ({
            url: `/lost-items/${lostId}`,
            method: apiMethod.GET,
         }),
      }),
      updateLostReport: build.mutation({
         query: ({ data, lostId }) => ({
            url: `/lost-items/${lostId}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["lost-items"],
      }),
      deleteLostReport: build.mutation({
         query: ({ lostId }) => ({
            url: `/lost-items/${lostId}`,
            method: apiMethod.DELETE,
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
   useDeleteLostReportMutation,
} = lostItemApi;
