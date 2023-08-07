import Carousel from "react-bootstrap/Carousel";
import ImageCarousel from "./ImageCarousel";
import Container from "react-bootstrap/Container";
import laptop from "../../Images/laptop.jpg";
import pcBoy from "../../Images/pcBoy.jpg";
const HomeCarousel = () => {
  return (
    <Container fluid className="pt-5 mt-2 mx-0 px-0 home-carousel-container">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <ImageCarousel text="laptop image" imagePath={pcBoy} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
