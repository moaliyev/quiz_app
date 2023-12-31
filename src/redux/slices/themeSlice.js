import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: localStorage.getItem("theme"),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: state => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice;
