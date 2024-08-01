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
  }),
});

export const {useLocationSuggestMutation} = hotelApiSlice;


