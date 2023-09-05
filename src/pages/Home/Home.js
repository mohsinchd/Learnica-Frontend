import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/reducers/userSideCourses/userSideCoursesSlice";

import HomeCarousel from "../../components/HomeComponents/HomeCarousel";
import Recommended from "../../components/HomeComponents/Recommended";
import ShortSkills from "../../components/HomeComponents/ShortSkills";
import BecomeInstructor from "../../components/HomeComponents/BecomeInstructor";
import Loader from "../../components/SharedComponents/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, courses } = useSelector((state) => state.userSideCourses);

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  return (
    <>
      <HomeCarousel />
      {isLoading ? <Loader /> : <Recommended courses={courses} />}
      {/* <ShortSkills /> */}
      <BecomeInstructor />
    </>
  );
};

export default Home;
