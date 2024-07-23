import { Themes } from "../@types/types";

export const addThemeToSession = (theme: Themes) => {
  sessionStorage.setItem("theme", theme);
};

export const getThemeFromSession: () => Themes | null = () => {
  return sessionStorage.getItem("theme") as Themes | null;
};

export const getBrowserTheme: () => Themes = () => {
  const theme: Themes =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  addThemeToSession(theme);
  return theme;
};

export const getThemeOrDefault: () => Themes = () => {
  return getThemeFromSession() || getBrowserTheme();
};

export const getReversedTheme: (theme: Themes) => Themes = (theme: Themes) => {
  return theme === "dark" ? "light" : "dark";
};
