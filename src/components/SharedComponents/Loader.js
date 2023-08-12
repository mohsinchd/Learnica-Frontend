import React from "react";

import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      variant="dark"
      style={{
        width: "100px",
        height: "100px",
        display: "block",
        margin: "auto",
      }}
    >
      <span className="sr-only"></span>
    </Spinner>
  );
};

export default Loader;
