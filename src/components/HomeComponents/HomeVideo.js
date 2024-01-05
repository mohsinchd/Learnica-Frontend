import React from "react";
import intro from "../../video/intro.mp4";

const HomeVideo = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center">
            <video
              src={intro}
              autoPlay
              loop
              controls
              style={{ height: "100%", width: "100%" }}
            ></video>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Unlock Your Potential with Learnica</h2>
          <p>
            Welcome to Learnica, where learning knows no bounds! Embark on a
            transformative journey to acquire new skills, enhance your
            expertise, and achieve your professional goals. Our diverse range of
            courses, led by industry experts, empowers you to learn at your own
            pace, anytime, anywhere. Whether you're a beginner or an experienced
            professional, Learnica is your gateway to a world of knowledge and
            growth. Join us today and let the pursuit of excellence begin!
            Explore cutting-edge topics, stay ahead of industry trends, and
            engage with interactive content that brings learning to life. Our
            user-friendly platform provides a seamless experience, allowing you
            to connect with a global community of learners, share insights, and
            collaborate on projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
