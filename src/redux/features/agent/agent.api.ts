import { baseApi } from "@/redux/BaseApi";
// import type { ISendOtp, IRootResp, IVerifyOtp, IPassword, IRegister } from "@/types";

export const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      approveAgent: builder.mutation({
         query: (data) => {
            const { id, ...rest } = data;
            return {
               url: `/admin/approve-agent/${id}`,
               method: "PATCH",
               data: rest,
            };
         },
         invalidatesTags: ["USER", "ALL-USERS"],
      }),
      suspendAgent: builder.mutation({
         query: (data) => {
            const { id, ...rest } = data;
            return {
               url: `/admin/suspend-agent/${id}`,
               method: "PATCH",
               data: rest,
            };
         },
         invalidatesTags: ["USER", "ALL-USERS"],
      }),

      CashIn: builder.mutation({
         query: (sendInfo) => ({
            url: "/agent/cash-in",
            method: "POST",
            data: sendInfo,
         }),
         invalidatesTags: ["WALLET"],
      }),
      CashOut: builder.mutation({
         query: (sendInfo) => ({
            url: "/agent/cash-out",
            method: "POST",
            data: sendInfo,
         }),
         invalidatesTags: ["WALLET"],
      }),

      // sendOtp: builder.mutation<IRootResp<null>, ISendOtp>({
      //    query: (userInfo) => ({
      //       url: "/otp/send",
      //       method: "POST",
      //       data: userInfo,
      //    }),
      // }),
   }),
});

export const { useApproveAgentMutation ,useSuspendAgentMutation, useCashInMutation} = authApi;
