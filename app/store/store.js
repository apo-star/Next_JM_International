/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const navigatorLanguage = navigator?.language || navigator?.userLanguage;
// create a slice
export const mountSlice = createSlice({
  name: "mount",
  initialState: {
    isMount: false,
    language: navigatorLanguage
  },
  reducers: {
    mountChange: (state) => {
      state.isMount = true;
    },
    languageChange: (state, action) => {
      state.language = action.payload;
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
