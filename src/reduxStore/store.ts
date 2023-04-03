import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/registrationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
