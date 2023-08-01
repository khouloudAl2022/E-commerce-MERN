import React from "react";
import { styled } from "styled-components";
import { Card } from "react-bootstrap";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProductCard = styled(Card)`
  width: 13rem;
  border-radius: 0;
  border: none;
  margin: 0.2%;
  transition: transform 0.3s ease;

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Product = ({ item }) => {
  return (
    <ProductCard>
      <Card.Img variant="top" src={item.img} style={{ borderRadius: "0" }} />
      <Info>
        <IconContainer>
          <ShoppingCartOutlined />
          <Link to={`/product/${item._id}`}>
            <SearchOutlined style={{color:"black"}}/>
          </Link>
          <FavoriteBorderOutlined />
        </IconContainer>
      </Info>
      <Card.Body>
        <Card.Title style={{fontSize: "12px" ,fontFamily: "Urbanist, sans-serif"}}>{item.title}</Card.Title>
        {/* Add other card body content if needed */}
      </Card.Body>
    </ProductCard>
  );
};

export default Product;
