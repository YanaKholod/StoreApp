import React from "react";
import Carousel from "react-material-ui-carousel";
import { dataForCarousel } from "../../utils/mockData";
import CarouselItem from "./CarouselItem";

const CategoriesCarousel = () => {
  return (
    <div>
      <Carousel>
        {dataForCarousel.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CategoriesCarousel;
