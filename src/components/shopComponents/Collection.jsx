import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../store/shopSlice";
import ShopItem from "./ShopItem";
// import styled from "styled-components";

// const Styled = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

const Collection = () => {
  const { catalog, queryParams } = useSelector((state) => state);
  // const queryParams = useSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!catalog.length) {
      dispatch(fetchCatalog());
    }
  }, []);
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [queryParams]);

  return (
    <div>
      {catalog.map((item, index) => {
        return <ShopItem key={index} item={item} />;
      })}
    </div>
  );
};

export default Collection;
