import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.webmanza.com",
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = localStorage.getItem("accessToken")
            if (token) {
                const accessToken = token.slice(1, -1)
                headers.set("Authorization", `Bearer ${accessToken}`)
            }
            headers.set("Origin", "bookshop.webmanza.com");
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
})
