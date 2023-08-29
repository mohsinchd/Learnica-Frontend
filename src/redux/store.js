import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import userReducer from "./reducers/user/userSlice";
import instructorReducer from "./reducers/instructor/instructorSlice";
import courseSectionsReducer from "./reducers/courseSections/courseSectionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    instructor: instructorReducer,
    courseSections: courseSectionsReducer,
  },
});

export default store;
