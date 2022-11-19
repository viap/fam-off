import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "../../types/common";

type InitialState = {
  theme: Themes;
};

const initialState: InitialState = {
  theme: Themes.LIGHT,
};

export const RootSlice = createSlice({
  name: "IndexSlice",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state = { ...initialState };
    },
    setTheme: (state, { payload }: PayloadAction<Themes>) => {
      state.theme = payload;
    },
  },
});

export const { clearState, setTheme } = RootSlice.actions;
