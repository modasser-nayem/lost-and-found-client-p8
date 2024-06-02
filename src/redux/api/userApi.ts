import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TMyProfile, TUser, TUserRole, TUserStatus } from "@/types/user";

const userApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMyProfile: build.query<TRtqQueryResponse<TMyProfile>, any>({
         query: () => ({
            url: "/users/me",
            method: apiMethod.GET,
         }),
         providesTags: ["users"],
      }),
      getAllUsers: build.query<TRtqQueryResponse<TUser[]>, any>({
         query: () => ({
            url: "/users",
            method: apiMethod.GET,
         }),
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
   useGetAllUsersQuery,
   useGetSingleUserQuery,
   useUpdateUserStatusMutation,
   useUpdateUserRoleMutation,
} = userApi;
