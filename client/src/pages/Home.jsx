import React from "react";
import Navbar from "../components/Navbar";
import CarouselShop from "components/CarouselShop";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CarouselShop />
      <Categories />
      
    </div>
  );
};

export default Home;
