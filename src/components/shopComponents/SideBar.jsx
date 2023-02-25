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
        <ul>
          <button onClick={() => changeCategoryHandler("/category/jewelery")}>
            Woman`s clothes
          </button>
          <li>Men`s clothes</li>
          <li>Jewelry</li>
          <li>Electronics</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
