import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQueryParams } from "../../store/shopSlice";
import styled from "styled-components";
import { sortedLinks } from "../../utils/staticData";
import { useNavigate, useSearchParams } from "react-router-dom";

const Styled = {
  SortButton: styled.div`
    background-color: #ffffff;
    border-radius: 50px;
    box-shadow: #61228b 0 -4px 8px inset;
    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-size: 20x;
    font-weight: 700;
    margin: 0;
    padding: 10px 17px;
    text-align: center;
    &:hover {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -3px 6px inset;
    }
    ${({ isActive }) =>
      isActive
        ? "background: #7f5feb; color: #dfdeee; box-shadow: #61228b 0 -3px 6px inset; "
        : ""}

    @media (min-width: 1500px) {
      font-size: 25px;
    }
  `,
};

const SideBar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const queryParamCategory = searchParams.get("category");

  const currentCategoryData = sortedLinks.find((item) => {
    return item.categoryName === queryParamCategory;
  });

  useEffect(() => {
    if (currentCategoryData)
      dispatch(setQueryParams(currentCategoryData.secondaryUrl));
  }, [queryParamCategory]);

  const changeCategoryHandler = (item) => {
    dispatch(setQueryParams(item.secondaryUrl));
    history({
      pathname: "/catalog",
      search: `?category=${item.categoryName}`,
    });
  };
  return (
    <div>
      {sortedLinks.map((item) => (
        <Styled.SortButton
          isActive={item.categoryName === queryParamCategory}
          key={item.id}
          onClick={() => changeCategoryHandler(item)}
        >
          {item.name}
        </Styled.SortButton>
      ))}
    </div>
  );
};

export default SideBar;
