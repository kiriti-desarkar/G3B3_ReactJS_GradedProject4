import { configureStore } from "@reduxjs/toolkit";
import { navBarSlice } from "./navigationBarSlice";
import { moviesSlice } from "./moviesSlice";

export const store = configureStore({
  reducer: {
    nav: navBarSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
