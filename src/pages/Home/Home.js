import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";

import HomeCarousel from "../../components/HomeComponents/HomeCarousel";
import Recommended from "../../components/HomeComponents/Recommended";
import ShortSkills from "../../components/HomeComponents/ShortSkills";
import BecomeInstructor from "../../components/HomeComponents/BecomeInstructor";
import Loader from "../../components/SharedComponents/Loader";
import HomeVideo from "../../components/HomeComponents/HomeVideo";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, courses } = useSelector((state) => state.userSideCourses);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/admin/analytics");
    }
    dispatch(getAllCourses());
  }, []);

  return (
    <>
      <HomeCarousel />
      {isLoading ? <Loader /> : <Recommended courses={courses} />}
      {/* <ShortSkills /> */}
      <HomeVideo />
      <BecomeInstructor />
    </>
  );
};

export default Home;
