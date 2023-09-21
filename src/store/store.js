
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "../features/api/apiSlice"
import { authSliceReducer } from "../features/auth/authSlice"
import { themeSliceReducer } from "../features/themeData/themeDataSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        themeInfo: themeSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});