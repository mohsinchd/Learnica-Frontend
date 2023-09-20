import ReactStars from "react-rating-stars-component";
import React from "react";

const CommentRatings = ({}) => {
  return (
    <ReactStars
      count={5}
      onChange={(newRating) => {
        console.log(newRating); // Is callback function mein rating ko handle karein
      }}
      size={25}
      isHalf={true}
      activeColor="#ffc700"
    />
  );
};

export default CommentRatings;
