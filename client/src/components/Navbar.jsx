// @ts-nocheck
//TODO: Add responsive and mobile
//FIXME: fix the searchbar make the icon inside the input and make more soft
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const FixedNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#ffffff"};
  z-index: 1000;
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
  align-item: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  color: #515151;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px", flexWrap: "wrap" })}
`;

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Determine when to add the transparent background
      if (scrollY > 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
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
            <Logo>KikiShop.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to="/cart">
              <MenuItem>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#292f30", fontSize: "30px" }}
                />
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </FixedNavbar>
  );
};

export default Navbar;
