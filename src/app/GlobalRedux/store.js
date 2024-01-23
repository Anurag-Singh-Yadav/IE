"use client";

import { configureStore } from "@reduxjs/toolkit";
import GlobalStateSlice from "./Features/GlobalStateSlice";

export const store = configureStore({
  reducer: {
    GlobalState: GlobalStateSlice,
  },
});
