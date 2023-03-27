import React from "react";
import CategoriesCarousel from "../components/carousel/CategoriesCarousel";
import NewClothes from "../components/NewClothes";

const HomePage = () => {
  return (
    <div>
      <CategoriesCarousel />
      <NewClothes />
    </div>
  );
};

export default HomePage;
