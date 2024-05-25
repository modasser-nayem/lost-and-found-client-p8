import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";

type MyAllLostReport = {
   id: string;
   title: string;
   category: string;
   brand: string;
   images: string[];
   lostDate: string;
   lostLocation: string;
   isFound: string;
   foundAt: string;
   createdAt: string;
   updatedAt: string;
};

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

type ResponseData<T> = { data?: T; error?: any };

const lostItemApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      reportLostReport: build.mutation({
         query: (data) => ({
            url: "/lost-items",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["lost-item"],
      }),
      getMyAllLostReport: build.query<ResponseData<MyAllLostReport[]>, any>({
         query: () => ({
            url: "/lost-items/my",
            method: apiMethod.GET,
         }),
         providesTags: ["lost-item"],
      }),
      getAllLostReport: build.query({
         query: () => ({
            url: "/lost-items",
            method: apiMethod.GET,
         }),
         providesTags: ["lost-item"],
      }),
      getSingleLostReport: build.query<ResponseData<MySingleLostItem>, any>({
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
         invalidatesTags: ["lost-item"],
      }),
      deleteLostReport: build.mutation({
         query: ({ lostId }) => ({
            url: `/lost-items/${lostId}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["lost-item"],
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
