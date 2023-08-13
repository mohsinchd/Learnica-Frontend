import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";

export const API_URL = "https://learnica-backend-production.up.railway.app";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
