import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromBasket } from "../store/shopSlice";
import s from "./HomePage.module.css";

const Basket = () => {
  const basketCollection = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleDeleteItem = (index) => {
    dispatch(removeItemFromBasket(index));
  };

  return (
    <div className={s.headwrapper}>
      {basketCollection.map((item, index) => (
        <div className={s.wrapper} key={index}>
          <div className={s.container}>
            <img className={s.img} src={item.img} alt={item.title} />
            <div>{item.title} </div>
            <div> {item.category}</div>
            <div>Price: ${item.price}</div>
            <div>
              <button
                className={s.button}
                onClick={() => handleDeleteItem(index)}
              >
                {/* <span>Delete</span> */}
                <svg
                  xmlns="ttp://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
