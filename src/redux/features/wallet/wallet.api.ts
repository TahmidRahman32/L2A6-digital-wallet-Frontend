// import { baseApi } from "@/redux/BaseApi";
// import type { ISendOtp, IRootResp, IVerifyOtp, IPassword, IRegister } from "@/types";

import { baseApi } from "@/redux/BaseApi";

export const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      sendMoney: builder.mutation({
         query: (sendMoneyInfo) => ({
            url: "/wallet/send-money",
            method: "PATCH",
            data: sendMoneyInfo,
         }),
         invalidatesTags: ["WALLET"],
      }),
      withdraw: builder.mutation({
         query: (withdrawInfo) => ({
            url: "/wallet/withdraw",
            method: "PATCH",
            data: withdrawInfo,
         }),
         invalidatesTags: ["WALLET"],
      }),
      getWallet: builder.query({
         query: (params) => ({
            url: "/wallet/me",
            method: "GET",
            params
         }),
         providesTags: ["WALLET"],
      }),
      getTransaction: builder.query({
         query: () => ({
            url: "/transactions/me",
            method: "GET",
         }),
      }),
   }),
});

export const { useSendMoneyMutation, useGetWalletQuery, useWithdrawMutation, useGetTransactionQuery } = authApi;
