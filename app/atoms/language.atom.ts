/** @format */

import { atom, selector } from "recoil";
const navigatorLanguage = navigator.language || navigator.userLanguage;

export const lngState = atom({
  key: "language", // unique ID (with respect to other atoms/selectors)
  default: navigatorLanguage.slice(0, 2) ?? "en" // default value (aka initial value)
});

export const charLngState = selector({
  key: "languageGet", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(lngState);

    return text;
  }
});
