import { popularProducts } from "../data";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFleteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/products?category=${cat}` : `/api/products`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);


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
