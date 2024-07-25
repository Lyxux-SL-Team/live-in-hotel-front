import { apiSlice } from "./apiSlice";

const USERS_URL = "/auth";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    validateEmail: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/email-validate`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useValidateEmailMutation, useLoginMutation } = userApiSlice;
