import React, { useState } from "react";
import { menuData } from "../utils/staticData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const Styled = {
  BurgerMenu: styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 70px;
    height: 70px;
    cursor: pointer;
    padding: 8px;
    @media (max-width: 860px) {
      display: flex;
  `,
  Div: styled.div`
    width: 100%;
    height: 9px;
    background-color: #61228b;
    margin: 7px 0;
    border-radius: 4px;
  `,
  HeadWrapper: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    z-index: 20;
    height: 5.3rem;
    background-color: #ffffff;
    box-shadow: #adcfff 0 -12px 6px inset;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: end;
    @media (max-width: 860px) {
      display: none;
    }
  `,
  Item: styled(NavLink)`
    list-style-type: none;
    margin: 1.3rem 1.2rem;
    background-color: #ffffff;
    border-radius: 40em;
    color: #000000;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    font-size: 25px;
    padding: 10px 17px;
    text-align: center;
    &:hover {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -6px 8px inset;
      transform: scale(1.125);
    }
    &.active {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -6px 8px inset;
      transform: scale(1.125);
    }
    @media (max-width: 1100px) {
      font-size: 20px;
      &:hover {
        color: #000000;
      }
    }
  `,
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styled.HeadWrapper>
      <Styled.BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        <Styled.Div></Styled.Div>
        <Styled.Div></Styled.Div>
        <Styled.Div></Styled.Div>
        {isOpen && <BurgerMenu />}
      </Styled.BurgerMenu>
      <Styled.Wrapper>
        {menuData.map((item) => (
          <Styled.Item key={item.id} to={item.link}>
            {item.title}
          </Styled.Item>
        ))}
      </Styled.Wrapper>
    </Styled.HeadWrapper>
  );
};

export default Menu;
