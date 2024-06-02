import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import {
   TClaimRequest,
   TMyClaimItem,
   TSingleClaimRequest,
   TUpdateClaimRequest,
} from "@/types/claim";
import { makeQueryParams } from "@/utils/reduxApi";

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
         query: (args: { id: string; query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: `/claims/found/${args.id}`,
               method: apiMethod.GET,
               params: params,
            };
         },
      }),
      getMyClaimItems: build.query<TRtqQueryResponse<TMyClaimItem[]>, any>({
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: `/claims/my`,
               method: apiMethod.GET,
               params: params,
            };
         },
      }),
      updateClaimRequestStatus: build.mutation({
         query: ({ id, status }: { id: string; status: string }) => ({
            url: `/claims/${id}`,
            method: apiMethod.PATCH,
            body: { status },
         }),
         invalidatesTags: ["claim-items", "found-items"],
      }),
      updateClaimRequest: build.mutation({
         query: ({ id, data }: { id: string; data: TUpdateClaimRequest }) => ({
            url: `/claims/${id}`,
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["claim-items"],
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
   useUpdateClaimRequestMutation,
   useDeleteClaimRequestMutation,
} = claimApi;
