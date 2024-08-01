import { apiSlice } from "./apiSlice";

const USERS_URL = "/admin";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/createAdmin`,
        method: "POST",
        body: data,
      }),
    }),
    validateEmail: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/checkEmail`,
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
