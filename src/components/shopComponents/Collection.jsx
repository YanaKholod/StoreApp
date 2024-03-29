import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../store/shopSlice";
import { addItemToBasket } from "../../store/shopSlice";
import ShopItemCard from "./ShopItemCard";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Styled = {
  CollectionWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    @media (max-width: 1300px) {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
    @media (min-width: 2800px) {
      margin: 0 15%;
    }
  `,
};

const Collection = () => {
  const { catalog, queryParams } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

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
            activeItemId={searchParams.get("itemsId")}
          />
        );
      })}
    </Styled.CollectionWrapper>
  );
};

export default Collection;
