import React from "react";
import Image from "react-bootstrap/Image";
import { FaUserCircle } from "react-icons/fa"; // Import the user circle icon

const Avatar = ({ src, alt }) => {
  if (src) {
    return (
      <div className="d-flex justify-content-center my-4">
        <Image
          src={src}
          alt={alt}
          roundedCircle
          className="img-fluid"
          style={{
            width: "200px",
            height: "200px",
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center my-4">
        <FaUserCircle size={100} />
      </div>
    );
  }
};

export default Avatar;
