import React from "react";
import { useDispatch } from "react-redux";
import { setQueryParams } from "../../store/shopSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const changeCategoryHandler = (text) => {
    dispatch(setQueryParams(text));
  };

  return (
    <div>
      <div>
        Categories:
        <button
          onClick={() => changeCategoryHandler("/category/women's clothing")}
        >
          Women`s clothes
        </button>
        <button
          onClick={() => changeCategoryHandler("/category/men's clothing")}
        >
          Men`s clothes
        </button>
        <button onClick={() => changeCategoryHandler("/category/jewelery")}>
          Jewelry
        </button>
        <button onClick={() => changeCategoryHandler("/category/electronics")}>
          Electronics
        </button>
        <button onClick={() => changeCategoryHandler("")}>Show all</button>
      </div>
    </div>
  );
};

export default SideBar;
