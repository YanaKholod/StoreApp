import React from "react";
import Carousel from "react-material-ui-carousel";
import { dataForCarousel } from "../../utils/mockData";
import CarouselItem from "./CarouselItem";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    box-sizing: border-box;
    width: 100%;
  `,
};
const CategoriesCarousel = () => {
  return (
    <Styled.Wrapper>
      <Carousel>
        {dataForCarousel.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </Styled.Wrapper>
  );
};

export default CategoriesCarousel;
