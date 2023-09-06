import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoute } from "protected-route-react";
import { useSelector } from "react-redux";

import { Toaster } from "react-hot-toast";

import Navigationbar from "./components/SharedComponents/Navigationbar";
import Footer from "./components/SharedComponents/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./components/SharedComponents/NofFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import EditProfile from "./pages/Profile/EditProfile";
import EditPassword from "./pages/Profile/EditPassword";
import EditProfilePhoto from "./pages/Profile/EditProfilePhoto";
import InstructorMainPage from "./components/instructor/InstructorMainPage";
import GetStartedWithVideo from "./components/instructor/instructorGuidDetails/GetStartedWithVideo";
import CreateIntriGungCourse from "./components/instructor/instructorGuidDetails/CreateIntriGungCourse";
import BuildYourAudience from "./components/instructor/instructorGuidDetails/BuildYourAudience";
import InstructorChallenge from "./components/instructor/instructorGuidDetails/InstructorChallenge";
import InstNewCourseForm from "./components/instructor/InstNewCourseForm";
import InstructorCourseSection from "./components/instructor/InstructorSections/InstCourseSection";
import InstCoursesMainPage from "./components/instructor/InstructorCourses/InstCoursesMainPage";
import InstSecLecture from "./components/instructor/InstructorLectures/InstSecLecture";
import InstCourseSection from "./components/instructor/InstructorSections/InstCourseSection";
import SelectedCourseDetail from "./pages/courseDetail/SelectedCourseDetail";
import SearchedCourses from "./pages/courseSearch/SearchedCourses";

const RouterComponent = () => {
  const { user } = useSelector((state) => state.auth);
  // const location = useLocation();
  const showNavigationRoutes = [
    "/",
    "/edit-profile",
    "/profile-photo",
    "/instructor-main-page",
  ];
  // const shouldShowNavigationbar = showNavigationRoutes.includes(
  //   location.pathname
  // );

  return (
    <BrowserRouter>
      {<Navigationbar />}

      <div className="">
        <main>
          <Routes>
            <Route index element={<Home />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route
              path="/api/v1/user/resetPassword/:token"
              element={<ResetPassword />}
            />

            <Route
              element={<ProtectedRoute isAuthenticated={user ? true : false} />}
            >
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/edit-password" element={<EditPassword />} />
              <Route path="/profile-photo" element={<EditProfilePhoto />} />

              <Route
                path="/instructor-main-page"
                element={<InstructorMainPage />}
              />
              <Route
                path="/inst-page/create-course"
                element={<CreateIntriGungCourse />}
              />
              <Route
                path="/inst-page/startWithVideo"
                element={<GetStartedWithVideo />}
              />
              <Route
                path="/inst-page/BuidAudience"
                element={<BuildYourAudience />}
              />
              <Route
                path="inst-page/instChallenge"
                element={<InstructorChallenge />}
              />
              <Route
                path="/instNewCourseForm"
                element={<InstNewCourseForm />}
              />
              <Route
                path="/instructor/courses"
                element={<InstCoursesMainPage />}
              />
              <Route
                path="/instructorCourse/section/:id"
                element={<InstCourseSection />}
              />
              <Route
                path="/instructorCourse/lectures/:courseId/:sectionId"
                element={<InstSecLecture />}
              />
            </Route>
            <Route
              path="/courseDetail/:id"
              element={<SelectedCourseDetail />}
            />

            <Route path="/search-courses" element={<SearchedCourses />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default RouterComponent;
