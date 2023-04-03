import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/registrationSlice";
import carReducer from "./reducers/registeredCarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
  },
});
