import Announcement from "components/Announcement";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import { styled } from "styled-components";
import Footer from "./Footer";
import { mobile } from "responsive";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { deleteCart } from "redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically in the center */
  padding: 100px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
  margin: 0;
`;
const TopButton = styled.button`
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  padding: 10px 20px; /* Add padding for better button appearance */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2b2e32;
  font-size: 24px;
  font-weight: bold;
`;

const WishList = () => {


  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <StyledLink to="/">
          <TopButton>CONTINUE SHOPPING</TopButton>
        </StyledLink>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default WishList;
