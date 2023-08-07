import React from "react";
import { short } from "../../CourseData/short";
import DisplayCardView from "./DisplayCardView";
const ShortSkills = () => {
  return (
    <div>
      <DisplayCardView cardData={short}>Short Skills</DisplayCardView>
    </div>
  );
};

export default ShortSkills;
