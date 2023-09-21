import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.webmanza.com",
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = localStorage.getItem("accessToken").replace(/"/g, '')
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            headers.set("Origin", "bookshop.webmanza.com");
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
})
