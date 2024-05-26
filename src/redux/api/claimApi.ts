import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";

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
      getClaimRequestByFoundId: build.query({
         query: ({ id }) => ({
            url: `/claims/found/${id}`,
            method: apiMethod.POST,
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
   }),
});

export const {
   useSendClaimRequestMutation,
   useGetClaimRequestByFoundIdQuery,
   useUpdateClaimRequestStatusMutation,
} = claimApi;
