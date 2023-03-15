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
    margin-top: 35.5rem;
    right: 0;
    width: 12.5rem;
    z-index: 30;
    background-color: #ffffff;
    border-radius: 1rem;
  `,
  BurgerItem: styled(NavLink)`
    list-style-type: none;
    margin: 1.3rem 1.2rem;
    //  background-color: #ffffff;
    background-color: #8ebce1;
    border-radius: 40em;
    color: #000000;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    font-size: 17px;
    padding: 10px 17px;
    text-align: center;
    &:hover {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -6px 8px inset;
      transform: scale(1.125);
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
