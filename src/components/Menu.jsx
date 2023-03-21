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
    width: 50px;
    height: 50px;
    cursor: pointer;
    padding: 8px;
    @media (max-width: 860px) {
      display: flex;
    }
  `,
  Div: styled.div`
    width: 100%;
    height: 5px;
    background-color: #61228b;
    margin: 5px 0;
    border-radius: 4px;
  `,
  HeadWrapper: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    z-index: 20;
    height: 80px;
    background-color: #ffffff;
    box-shadow: #61228b 0 -3px 6px inset;
    @media (max-width: 860px) {
      height: 65px;
    } ;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: end;
    @media (max-width: 860px) {
      display: none;
    }
  `,
  Item: styled(NavLink)`
    display: flex;
    align-items: center;
    margin: 20px 19px;
    border-radius: 100px;
    color: #000000;
    cursor: pointer;
    font-weight: 650;
    text-decoration: none;
    font-size: 25px;
    padding: 10px 17px;
    text-align: center;
    &:hover {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -3px 6px inset;
    }
    &.active {
      background: #7f5feb;
      color: #dfdeee;
      box-shadow: #61228b 0 -4px 8px inset;
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
