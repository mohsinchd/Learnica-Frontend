import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <BrowserRouter>
      <Navigationbar />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
