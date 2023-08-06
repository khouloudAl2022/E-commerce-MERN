import React from "react";
import Navbar from "../components/Navbar";
import CarouselShop from "components/CarouselShop";
import Categories from "../components/Categories";
import Announcement from "../components/Announcement";
import Products from "components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "./Footer";
import { styled } from "styled-components";

const Home = () => {
  return (
    <div>
      <Navbar />

      <CarouselShop />
      <Announcement />

      <Categories />

      <Products />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
