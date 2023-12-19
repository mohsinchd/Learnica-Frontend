import React, { useState } from "react";
import { cardData } from "../../CourseData/recoData";
import DisplayCardView from "./DisplayCardView";

const Recommended = ({ courses }) => {
  return (
    <div style={{ marginTop: "100px" }}>
      <DisplayCardView cardData={courses}>Our Courses</DisplayCardView>
    </div>
  );
};

export default Recommended;
