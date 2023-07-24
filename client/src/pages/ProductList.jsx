import Announcement from "components/Announcement";
import Navbar from "components/Navbar";
import Newsletter from "components/Newsletter";
import Products from "components/Products";
import React from "react";
import { styled } from "styled-components";
import Footer from "./Footer";
import { mobile } from "responsive";
import TuneIcon from "@mui/icons-material/Tune";

const Container = styled.div`
  margin-top: 0%;
`;
const Title = styled.h1`
  margin-left: 9vw;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter1 = styled.div`
  margin-left: 9vw;
  margin-top: 2vw;
  margin-bottom: 2vw;

  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const Filter2 = styled.div`
  margin-right: 8vw;
  margin-top: 2vw;
  margin-bottom: 2vw;

  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Wrapper = styled.div`
  padding-top: 100px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter1>
            <FilterText>
              <TuneIcon />
              Filter Products :
            </FilterText>
            <Select name="color">
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="size">
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter1>
          <Filter2>
            <FilterText>
              {" "}
              <TuneIcon />
              Sort Products:
            </FilterText>
            <Select>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter2>
        </FilterContainer>
      </Wrapper>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
