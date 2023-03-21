import React from "react";
import CategoriesCarousel from "../components/carousel/CategoriesCarousel";
import styled from "styled-components";
import NewClothes from "../components/NewClothes";

const Styled = {
  Carousel: styled.div`
    display: grid;
  `,
};

const HomePage = () => {
  return (
    <div>
      <CategoriesCarousel />
      <NewClothes />
    </div>
  );
};

export default HomePage;
