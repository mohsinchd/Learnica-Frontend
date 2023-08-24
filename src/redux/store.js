import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import userReducer from "./reducers/user/userSlice";
import instructorReducer from "./reducers/instructor/instructorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    instructor: instructorReducer,
  },
});

export default store;
