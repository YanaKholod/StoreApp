import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../store/shopSlice";
import { addItemToBasket } from "../../store/shopSlice";
import ShopItemCard from "./ShopItemCard";
// import styled from "styled-components";
import s from "../CompStyles.module.css";
// const Styled = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const Collection = () => {
  const { catalog, queryParams } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!catalog.length) {
      dispatch(fetchCatalog());
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [queryParams]);

  const handleItemToBasket = (item) => {
    dispatch(
      addItemToBasket({
        id: item.id,
        title: item.title,
        img: item.image,
        category: item.category,
        description: item.description,
        price: item.price,
      })
    );
  };

  return (
    <div className={s.wrapper}>
      {catalog.map((item, index) => {
        return (
          <ShopItemCard
            key={index}
            item={{
              id: item.id,
              title: item.title,
              img: item.image,
              category: item.category,
              description: item.description,
              price: item.price,
            }}
            handleItemToBasket={handleItemToBasket}
          />
        );
      })}
    </div>
  );
};

export default Collection;
