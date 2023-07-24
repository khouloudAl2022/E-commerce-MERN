import { popularProducts } from "../data";
import React from "react";
import { styled } from "styled-components";
import Product from "./Product";
const Container = styled.div`
margin-left:100px;
margin-right:100px;
display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        // @ts-ignore
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
