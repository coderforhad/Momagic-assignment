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
          dispatch(setThemeData(result.data));
        } catch (err) {
          //nothing
        }
      },
    }),
    getProductbyCategory: builder.query({
      query: (data) => ({
        url: "/product/v2/list/by/category/858/?page=1&items_per_page=10",
        body: data,
      }),
    }),
  }),
});

export const { useGetThemeInfoMutation, useGetProductbyCategoryQuery } = themeApi;

export const {
  endpoints: { getProductbyCategory },
} = themeApi;
export default themeApi;
