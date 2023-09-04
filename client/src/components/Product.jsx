import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Card } from "react-bootstrap";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { addProduct } from "redux/cartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { mobile } from "responsive";

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
  width: 15rem;
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 0;
  margin: 0.1%;
  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  &:hover ${Info} {
    opacity: 1;
  }
  ${mobile({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "100%",
    padding: "0px",
  })}
`;
const ProductImage = styled(Card.Img)`
  width: 100%;
  height: auto;
  border-radius: 0;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.1);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Product = ({ item }) => {
  const location = useLocation();

  const [isFavorited, setIsFavorited] = useState(false);

  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        console.log("getoneprod", res.data);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  const handleFavoriteToggle = () => {
    setIsFavorited((prevIsFavorited) => !prevIsFavorited);
  };

  return (
    <ProductCard style={{ borderRadius: "none" }}>
      <ProductImage variant="top" src={item.img} />
      <Info>
        <IconContainer>
          <ShoppingCartOutlined onClick={handleClick} />
          <StyledLink to={`/product/${item._id}`}>
            <SearchOutlined style={{ color: "black" }} />
          </StyledLink>
          {isFavorited ? (
            <FavoriteIcon
              onClick={handleFavoriteToggle}
              style={{ color: "white" }}
            />
          ) : (
            <FavoriteBorderOutlined onClick={handleFavoriteToggle} />
          )}
        </IconContainer>
      </Info>
      <Card.Body>
        <Card.Title
          style={{ fontSize: "12px", fontFamily: "Urbanist, sans-serif" }}
        >
          {item.title}
        </Card.Title>
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>{item.price}$</p>
        {/* Add other card body content if needed */}
      </Card.Body>
    </ProductCard>
  );
};

export default Product;
