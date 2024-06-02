import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TQueryParams, TRtqQueryResponse } from "@/types/redux";
import {
   TMyProfile,
   TUpdateProfile,
   TUser,
   TUserRole,
   TUserStatus,
} from "@/types/user";
import { makeQueryParams } from "@/utils/reduxApi";

const userApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMyProfile: build.query<TRtqQueryResponse<TMyProfile>, any>({
         query: () => ({
            url: "/users/me",
            method: apiMethod.GET,
         }),
      }),
      updateProfile: build.mutation({
         query: (data: TUpdateProfile) => ({
            url: "/users/me",
            method: apiMethod.PUT,
            body: data,
         }),
         invalidatesTags: ["users"],
      }),
      getAllUsers: build.query<TRtqQueryResponse<TUser[]>, any>({
         query: (args: { query?: TQueryParams[] }) => {
            const params = makeQueryParams(args?.query);
            return {
               url: "/users",
               method: apiMethod.GET,
               params: params,
            };
         },
         providesTags: ["users"],
      }),
      getSingleUser: build.query<TRtqQueryResponse<TUser>, any>({
         query: ({ id }: { id: string }) => ({
            url: `/users/${id}`,
            method: apiMethod.GET,
         }),
      }),
      updateUserStatus: build.mutation({
         query: ({ id, status }: { id: string; status: TUserStatus }) => ({
            url: `/users/status`,
            method: apiMethod.PATCH,
            body: { userId: id, status },
         }),
         invalidatesTags: ["users"],
      }),
      updateUserRole: build.mutation({
         query: ({ id, role }: { id: string; role: TUserRole }) => ({
            url: `/users/role`,
            method: apiMethod.PATCH,
            body: { userId: id, role },
         }),
         invalidatesTags: ["users"],
      }),
   }),
});

export const {
   useGetMyProfileQuery,
   useUpdateProfileMutation,
   useGetAllUsersQuery,
   useGetSingleUserQuery,
   useUpdateUserStatusMutation,
   useUpdateUserRoleMutation,
} = userApi;
