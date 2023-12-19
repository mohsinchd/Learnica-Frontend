import Carousel from "react-bootstrap/Carousel";
import ImageCarousel from "./ImageCarousel";
import Container from "react-bootstrap/Container";
import laptop from "../../Images/laptop.jpg";
import pcBoy from "../../Images/pcBoy.jpg";
import laptopattable from "../../Images/laptoattable.jpg";
const HomeCarousel = () => {
  return (
    <Container
      fluid
      className="pt-5 mt-2 mx-0 px-0 home-carousel-container text-light"
    >
      <Carousel className="home-carousel">
        <Carousel.Item>
          <ImageCarousel text="laptop image" imagePath={pcBoy} />
          <Carousel.Caption>
            <h3 className="text-light">Discover Limitless Learning</h3>
            <p>Explore Diverse Courses for Every Passion </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageCarousel text="laptop image " imagePath={laptopattable} />
          <Carousel.Caption>
            <h3 className="text-light">Master New Skills with Learnica</h3>
            <p>Learn from Industry Experts </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageCarousel text="laptop image " imagePath={laptop} />
          <Carousel.Caption>
            <h3 className="text-light">
              Join a Community of Lifelong Learners
            </h3>
            <p>Enrich Your Mind, Expand Your Horizons</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
