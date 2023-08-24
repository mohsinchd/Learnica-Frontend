import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5 ">
      <Button
        variant="outline-success"
        className="w-100"
        onClick={() => navigate(-1)}
      >
        <BiArrowBack />
        Back
      </Button>
    </div>
  );
};

export default BackButton;
