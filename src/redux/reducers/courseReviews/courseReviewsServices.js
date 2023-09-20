import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const createNewReview = async (reviewData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `${API_URL}/api/v1/course/user/review`,
    reviewData,
    config
  );

  return data;
};

const getAllReviews = async (id) => {
  const { data } = await axios.get(
    `${API_URL}/api/v1/course/user/reviews?courseId=${id}`
  );

  return data;
};

const courseReviewServices = {
  createNewReview,
  getAllReviews,
};

export default courseReviewServices;
