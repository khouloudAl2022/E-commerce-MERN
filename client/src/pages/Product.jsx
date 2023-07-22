import React from "react";
import { mobile } from "../responsive";
import { styled } from "styled-components";
import { IoAdd } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #008080;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="https://catalog.21buttons.com/3c16c4652b199d35fd119f9f5655e175fcf11ff9.smedium.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>heeloooooo</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            delectus, voluptate animi rerum voluptatem quaerat? Ipsum officiis,
            soluta ea tempora illum praesentium at quibusdam ex officia rerum
            magni ipsa! Beatae.
          </Desc>
          <Price>$ 50</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize></FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <AiOutlineMinus />
              <Amount>4</Amount>
              <IoAdd />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
