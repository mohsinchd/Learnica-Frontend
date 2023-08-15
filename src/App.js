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
