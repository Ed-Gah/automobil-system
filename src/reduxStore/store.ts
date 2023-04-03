import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/registrationSlice";
import carReducer from "./reducers/registeredCarSlice";
import bidReducer from "./reducers/bidSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    bids: bidReducer,
  },
});
