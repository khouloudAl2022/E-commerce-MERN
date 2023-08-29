//TODO:
// -* change the title and buttom to ligth colo
import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 80vh;
  position: relative;
  cursor: pointer;
  &:hover {
    filter: brightness(50%);
  }
  ${mobile({
    width: "100%",
    height: "100% !impo",
  })}
`;
/*   transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  } */

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "25vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: none;
  z-index: 1;
  position: absolute;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
