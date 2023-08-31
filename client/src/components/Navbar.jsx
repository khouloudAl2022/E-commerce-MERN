import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const FixedNavbar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#ffffff"};
  z-index: 11;
  transition: background-color 0.3s ease;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-top: -9px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 2%;
  padding: 5px;
  ${mobile({ margin: "12", justifyContent: "center" })}
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  background: transparent;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  color: #2b2e32;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // ${mobile({ justifyContent: "center", marginRight: "17px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #606565;
  ${mobile({ fontSize: "12px", marginLeft: "10px", flexWrap: "wrap" })}
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FixedNavbar isTransparent={isTransparent}>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#bdbdbd" }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <StyledLink to="/">
              <Logo>kikiShop.</Logo>
            </StyledLink>
          </Center>
          <Right>
            <StyledLink to="register">
              <MenuItem>REGISTER</MenuItem>
            </StyledLink>
            <StyledLink to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </StyledLink>
            <StyledLink to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                  <ShoppingCartOutlinedIcon
                    style={{ color: "#292f30", fontSize: "26px" }}
                  />
                </Badge>
              </MenuItem>
            </StyledLink>
          </Right>
        </Wrapper>
      </Container>
      {/* <SidebarAuth sidebar={sidebar} closeSidebar={closeSidebar} /> */}
    </FixedNavbar>
  );
};

export default Navbar;
