import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';


const initialState = {
  themeData: [],
};

const themeSlice = createSlice({
  name: "themeInfo",
  initialState,
  reducers: {
    setThemeData(state, action) {
      state.themeData = action.payload;
    },
  },
});

export const { setThemeData } = themeSlice.actions;
export default themeSlice.reducer;
export const selectCount = state => state.themeData;
