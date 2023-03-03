import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../store/shopSlice";
import { addItemToBasket } from "../../store/shopSlice";
import ShopItemCard from "./ShopItemCard";
import styled from "styled-components";

const Styled = {
  CollectionWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  `,
};

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
    dispatch(addItemToBasket(item));
  };

  return (
    <Styled.CollectionWrapper>
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
    </Styled.CollectionWrapper>
  );
};

export default Collection;
