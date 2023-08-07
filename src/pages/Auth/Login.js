import React from "react";
import FormComponent from "../../components/AuthComponents/FormComponent";
import Navigationbar from "../../components/SharedComponents/Navigationbar";
import Footer from "../../components/SharedComponents/Footer";
const Login = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <Navigationbar />
      <FormComponent isSignUp={false} />
      <Footer />
    </div>
  );
};

export default Login;
