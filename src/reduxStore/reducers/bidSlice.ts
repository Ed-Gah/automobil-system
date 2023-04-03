import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bids: [] as any,
};

const bidsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    bidCar: (state, { payload }) => {
      state.bids.push(payload);
    },
  },
});

const { actions, reducer } = bidsSlice;

export const { bidCar } = actions;

export const getBids = (state: any) => state.bids;
export default reducer;
