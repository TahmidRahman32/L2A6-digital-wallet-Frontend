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
      login: builder.mutation({
         query: (userInfo) => ({
            url: "/auth/login",
            method: "POST",
            data: userInfo,
         }),
      }),
      logout: builder.mutation({
         query: () => ({
            url: "/auth/logout",
            method: "POST",
         }),
         invalidatesTags: ["USER"],
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
   }),
});

export const { useRegisterMutation, useLoginMutation,useUserInfoQuery, useLogoutMutation } = authApi;
