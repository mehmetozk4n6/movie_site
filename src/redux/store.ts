import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
