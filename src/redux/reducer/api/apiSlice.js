import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const BASE_URL = "http://198.7.113.67:8080/api";
//const BASE_URL = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
