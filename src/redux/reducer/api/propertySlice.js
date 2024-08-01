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
    }),
});

export const {useRegisterPropertyMutation} = propertyApiSlice;


