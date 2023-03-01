import React from "react";
import s from "./HomePage.module.css";
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
      <div className={s.pokeCommunity}></div>
      <div className={s.pokeApp}></div>
      <div className={s.footerContacts}></div>
    </div>
  );
};

export default HomePage;
