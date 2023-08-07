import React from "react";

const ImageCarousel = ({ text, imagePath }) => {
  return (
    <div className="image-container">
      <img src={imagePath} alt={text} className="carousel-image" />
    </div>
  );
};

export default ImageCarousel;
