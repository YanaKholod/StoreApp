import React from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket } from "../../store/shopSlice";

const ShopItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(addItemToBasket(item));
  };
  return (
    <div className="wrapper">
      <div>Title:{item.title} </div>
      <div>
        <img src={item.image} />
      </div>
      <div>Category: {item.category}</div>
      <div>Description: {item.description}</div>
      <div>Price: ${item.price}</div>
      <div>Rating: {item.rating.rate}</div>
      <div>
        <button onClick={handleAction}>Buy now</button>
      </div>
    </div>
  );
};

export default ShopItem;
