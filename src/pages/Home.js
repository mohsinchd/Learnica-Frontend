import Navigationbar from "../components/Navigationbar";
import HomeCarousel from "../components/HomeCarousel";
import Recommended from "../components/Recommended";
import ShortSkills from "../components/ShortSkills";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navigationbar />

      <HomeCarousel />
      <Recommended />
      <ShortSkills />
      <Footer />
    </>
  );
};

export default Home;
