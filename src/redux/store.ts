import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { RootSlice } from "../pages/Root/RootSlice";

export const store = configureStore({
  reducer: {
    root: RootSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
