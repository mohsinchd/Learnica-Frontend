import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <Button
        variant="outline-success"
        className=""
        onClick={() => navigate(-1)}
      >
        <BiArrowBack />
        Back
      </Button>
    </div>
  );
};

export default BackButton;
