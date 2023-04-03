import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => (state.user = null) as any,
  },
});

const { actions, reducer } = authSlice;

export const { register, logout } = actions;


export const getUser = (state: any) => state.auth;
export default reducer;
