import { apiSlice } from "./apiSlice";

const USERS_URL = "/property";

export const propertyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerProperty: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/properties`,
                method: "POST",
                body: data,
            }),
        }),
        isPropertyVerified: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/verify/${data}`,
                method: "GET",
            }),
        }),
    }),
});

export const {useRegisterPropertyMutation, useIsPropertyVerifiedMutation} = propertyApiSlice;


