import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";

export const API_URL = "https://learnica-backend.vercel.app";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
