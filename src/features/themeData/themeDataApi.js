import { apiSlice } from "../api/apiSlice";

export const themeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getThemeInfo: builder.mutation({
            query: (data) => ({
                url: "/general/v2/store-info",
                method: "POST",
                body: data,
            }),
        }),
    })
})

export const { useGetThemeInfoMutation } = themeApi; 