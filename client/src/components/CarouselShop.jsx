import React from "react";
import { Carousel } from "react-bootstrap";
import { keyframes, styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
`;
const WaveText = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const flip = keyframes`
  0%, 80% {
    transform: rotateY(360deg);
  }
`;

const WaveSpan = styled.span`
  display: flex;
  display: inline-block;
  margin-top: 50px;
  font-size: 80px;
  font-weight: bolder;
  color: #414141;
  -webkit-background-clip: text;
  text-transform: uppercase;
  animation: ${flip} 2s infinite;
  animation-delay: ${(props) => `calc(0.2s * ${props.index})`};
`;
const H3 = styled.h3`
  color: #414141;
  margin-left: 10%;
  width: 100%;
`;
const CarouselShop = () => {
  const waveText = "Vogue "; //FIXME: change style

  return (
    <Container>
      <Carousel>
        <Carousel.Item style={{ height: "50rem", position: "relative" }}>
          <img
            className="d-block w-100"
            src="https://usabilitygeek.com/wp-content/uploads/2020/06/color.jpg"
            alt="First slide"
          />
          <WaveText className="waviy">
            {waveText.split("").map((char, index) => (
              <WaveSpan key={index} index={index + 1}>
                {char}
              </WaveSpan>
            ))}
            <H3>
              DON'T COMPOMISE ON STYLE! GET FLAT 30% <br />
              OFF FOR NEW ARRIVALS
            </H3>
          </WaveText>
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50rem" }}>
          <img
            className="d-block w-100"
            src="https://www.refinery29.com/images/10378044.jpg?crop=40%3A21"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "50rem" }}>
          <img
            className="d-block w-100"
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/eadc/635b/9738/faba/92f1/4dcf/dfc6/1a4b/420e/51c3/51c3.jpg"
            alt="Third slide"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    //FIXME:caption items on carousel changing style and text
  );
};

export default CarouselShop;
