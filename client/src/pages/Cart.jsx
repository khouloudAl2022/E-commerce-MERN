import Announcement from "components/Announcement";
import Navbar from "components/Navbar";
import React from "react";
import { styled } from "styled-components";
import Footer from "./Footer";
import { mobile } from "responsive";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h2`
  margin-top: 5%;

  font-weight: 300;
  text-align: center;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #c5c5c5;
  height: 2px;
  border: none;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const ProductSize = styled.span``;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>{product.title}</b>
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMARRY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Emmited Shipping</SummaryItemText>
              <SummaryItemPrice>$ -5.30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
