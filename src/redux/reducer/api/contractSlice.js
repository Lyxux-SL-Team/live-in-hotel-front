import { apiSlice } from "./apiSlice";

const USERS_URL = "/contract";

export const contractApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerContact: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/contracts`,
                method: "POST",
                body: data,
            }),
        }),
        isContactVerified: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/verify/${data}`,
                method: "GET",
            }),
        }),
    }),
});

export const {useRegisterContactMutation, useIsContactVerifiedMutation} = contractApiSlice;


