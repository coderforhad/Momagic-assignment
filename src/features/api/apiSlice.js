import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.webmanza.com",
    prepareHeaders: async (headers, { endpoint, getState }) => {
      const token = getState()?.auth.accessToken;
      console.log('From Api Slice', token)
      const localToken = localStorage.getItem("accessToken").slice(1, -1);
      if(token || localToken) {
        headers.set("Authorization", `Bearer ${token || localToken}`);
      }
      headers.set("Origin", "bookshop.webmanza.com");
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
