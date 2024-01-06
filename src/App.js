import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Cart from "./pages/cart/Cart";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";
import EnrolledCoursePlayer from "./pages/enrolledPage/EnrolledCoursePlayer";
import UserEnrolledCourses from "./pages/Profile/UserEnrolledCourses";
import InstructorSectionEdit from "./components/instructor/InstructorCourses/InstructorSectionEdit";
import Mohsin from "./components/ContactUs/Mohsin";
import Shahzaib from "./components/ContactUs/Shahzaib";
import Salman from "./components/ContactUs/Salman";
import ContactUs from "./pages/contactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import InstructorAnalyticsMain from "./pages/InstructorAnalytics/InstructorAnalyticsMain";

import AdminPanelMain from "./pages/AdminPanel/AdminPanelMain";
import AdminPanelUsers from "./pages/AdminPanel/AdminPanelUsers";
import AdminPanelCourses from "./pages/AdminPanel/AdminPanelCourses";
import AdminPanelSingleUser from "./pages/AdminPanel/AdminPanelSingleUser";
import AdminPanelSingleCourse from "./pages/AdminPanel/AdminPanelSingleCourse";

const RouterComponent = () => {
  const { user } = useSelector((state) => state.auth);
  // const location = useLocation();

  const showNavigationRoutes = [
    "/",
    "/edit-profile",
    "/profile-photo",
    "/instructor-main-page",
  ];

  return (
    <>
      {(!user || (user && user.role !== "admin")) && <Navigationbar />}

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
                path="/instructorCourse/course-edit/:id"
                element={<InstructorSectionEdit />}
              />
              <Route
                path="/instructorCourse/lectures/:courseId/:sectionId"
                element={<InstSecLecture />}
              />

              <Route
                path="/instructor/analytics"
                element={<InstructorAnalyticsMain />}
              />

              <Route path="/cart" element={<Cart />} />

              <Route
                path="/user-enrolledCourses"
                element={<UserEnrolledCourses />}
              />

              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route
                path="/user-enrolledCourses/:id"
                element={<EnrolledCoursePlayer />}
              />
            </Route>
            <Route
              path="/courseDetail/:id"
              element={<SelectedCourseDetail />}
            />

            <Route
              element={
                <ProtectedRoute
                  isAuthenticated={user ? true : false}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin" ? true : false}
                  redirectAdmin={"/"}
                />
              }
            >
              <Route path="/admin/analytics" element={<AdminPanelMain />} />
              <Route path="/admin/users" element={<AdminPanelUsers />} />
              <Route
                path="/admin/users/:id"
                element={<AdminPanelSingleUser />}
              />
              <Route path="/admin/courses" element={<AdminPanelCourses />} />
              <Route
                path="/admin/courses/:id"
                element={<AdminPanelSingleCourse />}
              />
            </Route>

            <Route path="/search-courses" element={<SearchedCourses />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/mohsin" element={<Mohsin />} />
            <Route path="/Shahzaib" element={<Shahzaib />} />
            <Route path="/salman" element={<Salman />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      {(!user || (user && user.role !== "admin")) && <Footer />}
      <Toaster />
    </>
  );
};

export default RouterComponent;
