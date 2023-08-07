import React from "react";
import Navigationbar from "./SharedComponents/Navigationbar";
import Footer from "./SharedComponents/Footer";
import { Container } from "react-bootstrap";
const NofFound = () => {
  return (
    <div>
      <Navigationbar />

      <Container className="" style={{ paddingTop: "150px" }}>
        <h2 className="notFound-container  ">NOT FOUND ....😋😋</h2>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default NofFound;
