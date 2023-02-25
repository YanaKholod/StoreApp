import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div>
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "100%", height: "500px" }}
      ></img>
      <p>{item.imgText}</p>
      <button variant="contained">{item.buttonText}</button>
    </div>
  );
};

export default CarouselItem;
