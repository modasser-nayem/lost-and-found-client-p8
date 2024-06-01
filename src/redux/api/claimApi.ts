import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import {
   TClaimRequest,
   TMyClaimItem,
   TSingleClaimRequest,
} from "@/types/claim";

const claimApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      sendClaimRequest: build.mutation({
         query: (data) => ({
            url: "/claims",
            method: apiMethod.POST,
            body: data,
         }),
         invalidatesTags: ["claim-items", "found-items"],
      }),
      getSingleClaimRequest: build.query<
         TRtqQueryResponse<TSingleClaimRequest>,
         any
      >({
         query: ({ id }: { id: string }) => ({
            url: `/claims/${id}`,
            method: apiMethod.GET,
         }),
      }),
      getClaimRequestByFoundId: build.query<
         TRtqQueryResponse<TClaimRequest[]>,
         any
      >({
         query: ({ id }: { id: string }) => ({
            url: `/claims/found/${id}`,
            method: apiMethod.GET,
         }),
      }),
      getMyClaimItems: build.query<TRtqQueryResponse<TMyClaimItem[]>, any>({
         query: () => ({
            url: `/claims/my`,
            method: apiMethod.GET,
         }),
      }),
      updateClaimRequestStatus: build.mutation({
         query: ({ id, status }: { id: string; status: string }) => ({
            url: `/claims/${id}`,
            method: apiMethod.PATCH,
            body: { status },
         }),
         invalidatesTags: ["claim-items", "found-items"],
      }),
      deleteClaimRequest: build.mutation({
         query: ({ id }: { id: string }) => ({
            url: `/claims/${id}`,
            method: apiMethod.DELETE,
         }),
         invalidatesTags: ["claim-items", "found-items"],
      }),
   }),
});

export const {
   useSendClaimRequestMutation,
   useGetSingleClaimRequestQuery,
   useGetClaimRequestByFoundIdQuery,
   useGetMyClaimItemsQuery,
   useUpdateClaimRequestStatusMutation,
   useDeleteClaimRequestMutation,
} = claimApi;
