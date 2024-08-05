import { apiSlice } from "./apiSlice";

const USERS_URL = "/policy";

export const policyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerPolicy: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/policy`,
                method: "POST",
                body: data,
            }),
        }),
        // isContactVerified: builder.mutation({
        //     query: (data) => ({
        //         url: `${USERS_URL}/verify/${data}`,
        //         method: "GET",
        //     }),
        // }),
    }),
});

export const {useRegisterPolicyMutation, useIsContactVerifiedMutation} = policyApiSlice;


