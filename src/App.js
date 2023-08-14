import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigationbar from "./components/SharedComponents/Navigationbar";
import Footer from "./components/SharedComponents/Footer";
import Home from "./pages/Home/Home";
import EditProfile from "./pages/EditProfile";
import NotFound from "./components/SharedComponents/NofFound";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Reset from "./pages/Auth/Reset";
import BasicInfo from "./components/EditProfile/BasicInfo";
import PasswordChange from "./components/EditProfile/PasswordChange";
import Enrollment from "./components/EditProfile/Enrollment";

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
            <Route path="/forget-password" element={<Reset />} />
            <Route path="/edit-profile" element={<EditProfile />}>
              <Route
                index
                element={<Navigate replace to="basic-Information" />}
              />
              <Route path="basic-information" element={<BasicInfo />} />
              <Route path="password-Information" element={<PasswordChange />} />
              <Route path="enrollment" element={<Enrollment />} />
            </Route>

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
