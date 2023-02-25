import React from "react";
import s from "./HomePage.module.css";
import CategoriesCarousel from "../components/carousel/CategoriesCarousel";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.categoriesCarousel}>
        <CategoriesCarousel />
      </div>
      <div className={s.popularPoke}></div>
      <div className={s.pokeCommunity}></div>
      <div className={s.pokeApp}></div>
      <div className={s.footerContacts}></div>
    </div>
  );
};

export default HomePage;
