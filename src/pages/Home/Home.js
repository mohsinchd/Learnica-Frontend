import Navigationbar from "../../components/SharedComponents/Navigationbar";
import HomeCarousel from "../../components/HomeComponents/HomeCarousel";
import Recommended from "../../components/HomeComponents/Recommended";
import ShortSkills from "../../components/HomeComponents/ShortSkills";
import Footer from "../../components/SharedComponents/Footer";
import BecomeInstructor from "../../components/HomeComponents/BecomeInstructor";
const Home = () => {
  return (
    <>
      <Navigationbar />

      <HomeCarousel />
      <Recommended />
      <ShortSkills />
      <BecomeInstructor />
      <Footer />
    </>
  );
};

export default Home;
