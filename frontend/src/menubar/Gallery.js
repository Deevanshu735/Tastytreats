// import React from "react";
import { Navigation } from "../tastytreats/Navigation";
import { Container, Carousel, Image } from "react-bootstrap";
import restaurent from "./project/Restaurant.webp";
import r2 from "./project/Restaurant1.webp";
import r3 from "./project/Restaurenty3.png";
import r4 from "./project/res4.jpg";
import r5 from "./project/res5.jpg";
import r6 from "./project/res6.jpg";
import r7 from "./project/r7.jpg";

export default function Gallery() {
  return (
    <>
      <Navigation />
      <Container
        className="pb-5 pt-5"
        style={{ backgroundColor: "#f2f2f2" }}
        fluid
      >
        <h5 className="text-center text-secondary">Gallery</h5>
        <h2 className="text-center text-secondary">
          <i>
            Check
            <span className="text-danger"> Our Gallery!</span>
          </i>
        </h2>
        <Carousel className="pt-5 mb-5 w-75 h-50 mx-auto">
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={restaurent} />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r2} />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r3} />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r4} fluid />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r5} fluid />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r6} fluid />
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <Image className="w-50 h-50" src={r7} fluid />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
