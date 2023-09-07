/** @format */

"use client";
/** @format */

import { platform } from "os";

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

let navigatorLanguage = "es";
if (typeof window !== "undefined") {
  navigatorLanguage = navigator?.language;
}
// create a slice
export const mountSlice = createSlice({
  name: "mount",
  initialState: {
    isMount: false,
    language: navigatorLanguage,
    product: "",
    indexProduct:""
  },
  reducers: {
    mountChange: (state) => {
      state.isMount = true;
    },
    languageChange: (state, action) => {
      state.language = action.payload;
    },
    updateProduct: (state, action) => {
      console.log("Action: ", action);
      state.product = action.payload.products;
      state.indexProduct = action.payload.index
    }
  }
});
// config the store
const store = configureStore({
  reducer: {
    mount: mountSlice.reducer
  }
});

// export default the store
export default store;

// export the action
export const mountAction = mountSlice.actions;
