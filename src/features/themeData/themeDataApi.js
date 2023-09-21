import { apiSlice } from "../api/apiSlice";
import { setThemeData } from "./themeDataSlice";

export const themeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getThemeInfo: builder.mutation({
            query: (data) => ({
                url: "/general/v2/store-info",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setThemeData(result.data))
                } catch (err) {
                    //nothing
                }
            }
        }),
    })
})

export const { useGetThemeInfoMutation } = themeApi; 