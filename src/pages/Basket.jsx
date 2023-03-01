import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromBasket } from "../store/shopSlice";

const Basket = () => {
  const basketCollection = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  console.log("basketCollection", basketCollection);
  const handleDeleteItem = (index) => {
    dispatch(removeItemFromBasket(index));
  };
  return (
    <div>
      {basketCollection.map((item, index) => (
        <div key={index}>
          <div>Title:{item.title} </div>
          <div>
            <img src={item.img} />
          </div>
          <div>Category: {item.category}</div>
          <div>Description: {item.description}</div>
          <div>Price: ${item.price}</div>
          <div>
            <button onClick={() => handleDeleteItem(index)}>Delete item</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
