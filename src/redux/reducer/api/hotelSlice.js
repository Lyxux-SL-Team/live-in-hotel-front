import { apiSlice } from "./apiSlice";

const USERS_URL = "/hotel";

export const hotelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    locationSuggest: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/locationAutocomplete`,
        method: "GET",
        params:{input:data}
      }),
    }),
    registerHotel: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/hotel`,
        method: "POST",
        body: data,
      }),
    }),
    isHotelVerified: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/verify/${data}`,
        method: "GET",
      }),
    }),
  }),
});

export const {useLocationSuggestMutation, useRegisterHotelMutation, useIsHotelVerifiedMutation} = hotelApiSlice;


