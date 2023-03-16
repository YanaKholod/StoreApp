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
  Title: styled.p`
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 600;
    margin: 20px 0;
    box-shadow: #61228b 0 -4px inset;
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
    <div>
      <Styled.Title>New!</Styled.Title>
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
    </div>
  );
};

export default NewClothes;
