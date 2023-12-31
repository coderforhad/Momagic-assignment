import { apiSlice } from "../api/apiSlice";
import { setAccessToken } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAccessToken: builder.mutation({
      query: (data) => ({
        url: "/auth/v2/get-access-token",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setAccessToken(result.data.access_token));
          localStorage.setItem("accessToken", JSON.stringify(result.data.access_token));
        } catch (err) {
          //nothing
        }
      },
    }),
  }),
});

export const { useGetAccessTokenMutation } = authApi;
