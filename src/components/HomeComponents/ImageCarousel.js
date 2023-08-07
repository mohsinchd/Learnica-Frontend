import React from "react";

const ImageCarousel = ({ text, imagePath }) => {
  const isLaptopImage = imagePath.endsWith("laptop.jpg");
  const imageClassName = isLaptopImage ? { filter: "brightness(100%)" } : {};

  return (
    <div className="image-container">
      <img
        src={imagePath}
        alt={text}
        className="carousel-image"
        style={imageClassName}
      />
    </div>
  );
};

export default ImageCarousel;
