import { baseApi } from "@/redux/BaseApi";
// import type { ISendOtp, IRootResp, IVerifyOtp, IPassword, IRegister } from "@/types";

export const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      register: builder.mutation({
         query: (userInfo) => ({
            url: "/user/register",
            method: "POST",
            data: userInfo,
         }),
      }),
      updateUser: builder.mutation({
         query: (userId) => ({
            url: `/user/${userId}`,
            method: "PATCH",
         }),
      }),
      userBlocked: builder.mutation({
         query: (data) => {
            const { id, ...rest } = data;
            return {
               url: `/admin/block/${id}`,
               method: "PATCH",
               data: rest,
            };
         },
         invalidatesTags: ["WALLET", "ALL-USERS"],
      }),
      userStatusChange: builder.mutation({
         query: (data) => {
            const { id, ...rest } = data;
            return {
               url: `/admin/${id}`,
               method: "PATCH",
               data: rest,
            };
         },
         invalidatesTags: ["USER", "ALL-USERS"],
      }),

      // sendOtp: builder.mutation<IRootResp<null>, ISendOtp>({
      //    query: (userInfo) => ({
      //       url: "/otp/send",
      //       method: "POST",
      //       data: userInfo,
      //    }),
      // }),

      userInfo: builder.query({
         query: () => ({
            url: "/user/me",
            method: "GET",
         }),
         providesTags: ["USER"],
      }),

      allUsersTransactions: builder.query({
         query: () => ({
            url: "/transactions/all-users-transaction",
            method: "GET",
         }),
         providesTags: ["ALL-TRANSACTIONS"],
      }),
      allUsers: builder.query({
         query: (params) => ({
            url: "/user/all-users",
            method: "GET",
            params,
         }),
         providesTags: ["ALL-USERS"],
      }),
   }),
});

export const { useRegisterMutation, useUserInfoQuery, useAllUsersTransactionsQuery, useUpdateUserMutation, useAllUsersQuery, useUserBlockedMutation , useUserStatusChangeMutation} = authApi;
