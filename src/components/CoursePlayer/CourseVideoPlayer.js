import React from "react";

const CourseVideoPlayer = ({ videoUrl }) => {
  console.log(videoUrl);
  return (
    <div className="bg-dark text-center mb-5">
      <video controls width="100%" height="" src={videoUrl} autoPlay>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CourseVideoPlayer;
