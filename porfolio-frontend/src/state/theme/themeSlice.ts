import { createSlice } from "@reduxjs/toolkit";
import { Themes } from "../../@types/types";
import {
  addThemeToSession,
  getBrowserTheme,
  getThemeOrDefault,
} from "../../utils/theme";

const initialState = getThemeOrDefault();

const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: Themes) => {
      const newTheme = state === "light" ? "dark" : "light";
      addThemeToSession(newTheme);
      return newTheme;
    },
    resetToBrowserTheme: () => getBrowserTheme(),
  },
});

export const { toggleTheme, resetToBrowserTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
