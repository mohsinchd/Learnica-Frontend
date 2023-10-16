import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import userReducer from "./reducers/user/userSlice";
import instructorReducer from "./reducers/instructor/instructorSlice";
import courseSectionsReducer from "./reducers/courseSections/courseSectionsSlice";
import courseLecturesReducer from "./reducers/courseLectures/courseLecturesSlice";
import userSideCoursesReducer from "./reducers/userSideCourses/userSideCoursesSlice";
import cartReducer from "./reducers/cart/cartSlice";
import courseReviewsReducer from "./reducers/courseReviews/courseReviewsSlice";
import adminReducer from "./reducers/admin/adminSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    instructor: instructorReducer,
    courseSections: courseSectionsReducer,
    courseLectures: courseLecturesReducer,
    userSideCourses: userSideCoursesReducer,
    courseReviews: courseReviewsReducer,
    cart: cartReducer,
    admin: adminReducer,
  },
});

export default store;
