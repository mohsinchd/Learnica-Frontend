import Carousel from "react-bootstrap/Carousel";
import ImageCarousel from "./ImageCarousel";
import Container from "react-bootstrap/Container";
import laptop from "../../Images/laptop.jpg";
import pcBoy from "../../Images/pcBoy.jpg";
import laptopattable from "../../Images/laptoattable.jpg";
const HomeCarousel = () => {
  return (
    <Container fluid className="pt-5 mt-2 mx-0 px-0 home-carousel-container">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <ImageCarousel text="laptop image" imagePath={pcBoy} />
          <Carousel.Caption>
            <h3>secure you saving with Great Future</h3>
            <p>
              Millions of people join our platform , invest you short time and
              make a large deal of future{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageCarousel text="laptop image " imagePath={laptopattable} />
          <Carousel.Caption>
            <h3>secure you saving with Great Future</h3>
            <p>
              Millions of people join our platform , invest you short time and
              make a large deal of future{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageCarousel text="laptop image " imagePath={laptop} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
