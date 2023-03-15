import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewClothes } from "../store/shopSlice";
import { addItemToBasket } from "../store/shopSlice";
import ShopItemCard from "./shopComponents/ShopItemCard";
import styled from "styled-components";

const Styled = {
  NewCollectionWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  `,
};
const NewClothes = () => {
  const newClothesCatalog = useSelector((state) => state.newClothes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewClothes());
  }, []);

  const handleItemToBasket = (item) => {
    dispatch(addItemToBasket(item));
  };
  return (
    <Styled.NewCollectionWrapper>
      {newClothesCatalog.map((item) => {
        return (
          <ShopItemCard
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              img: item.imgUrl,
              category: item.category,
              description: item.compound,
              price: item.price,
            }}
            handleItemToBasket={handleItemToBasket}
          />
        );
      })}
    </Styled.NewCollectionWrapper>
  );
};

export default NewClothes;
