import React from "react";
import Navbar from "../components/Navbar";
import CarouselShop from "components/CarouselShop";
import Categories from "../components/Categories";
import Announcement from "../components/Announcement";

const Home = () => {
  return (
    <div>
      <Announcement />

      <Navbar />
      <CarouselShop />
      <Categories />
    </div>
  );
};

export default Home;
