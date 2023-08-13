import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
