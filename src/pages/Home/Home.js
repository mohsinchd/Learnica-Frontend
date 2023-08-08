import HomeCarousel from "../../components/HomeComponents/HomeCarousel";
import Recommended from "../../components/HomeComponents/Recommended";
import ShortSkills from "../../components/HomeComponents/ShortSkills";
import BecomeInstructor from "../../components/HomeComponents/BecomeInstructor";
const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Recommended />
      <ShortSkills />
      <BecomeInstructor />
    </>
  );
};

export default Home;
