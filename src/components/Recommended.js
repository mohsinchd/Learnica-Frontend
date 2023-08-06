import React, { useState } from "react";
import { cardData } from "../CourseData/recoData";
import DisplayCardView from "./DisplayCardView";

const Recommended = () => {
  return (
    <DisplayCardView cardData={cardData}>Recommended Course</DisplayCardView>
  );
};

export default Recommended;
