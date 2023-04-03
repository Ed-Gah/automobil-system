import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [] as any,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerCar: (state, { payload }) => {
      state.cars.push(payload);
    },
  },
});

const { actions, reducer } = authSlice;

export const { registerCar } = actions;

export const getCars = (state: any) => state.cars;
export default reducer;
