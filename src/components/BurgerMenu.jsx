import React from "react";
import { menuData } from "../utils/staticData";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styled = {
  BurgerWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: fixed;
    margin-top: 568px;
    right: 0;
    width: 200px;
    z-index: 30;
    background-color: #ffffff;
    border-radius: 16px;
  `,
  BurgerItem: styled(NavLink)`
    list-style-type: none;
    margin: 18px 19px;
    background-color: #ffffff;
    border-radius: 40em;
    color: #000000;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    font-size: 17px;
    padding: 10px 17px;
    text-align: center;
    box-shadow: #61228b 0 -4px 8px inset;

    }
  `,
};
const BurgerMenu = () => {
  return (
    <Styled.BurgerWrapper>
      {menuData.map((item) => (
        <Styled.BurgerItem key={item.id} to={item.link}>
          {item.title}
        </Styled.BurgerItem>
      ))}
    </Styled.BurgerWrapper>
  );
};

export default BurgerMenu;
