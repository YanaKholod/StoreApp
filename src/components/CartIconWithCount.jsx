import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartIcon from "./icons/CartIcon";
import { NavLink } from "react-router-dom";

const Styled = {
  LocationIcon: styled.div`
    justify-content: end;
    position: fixed;
    bottom: 100px;
    right: 0;
    z-index: 30;
    padding-right: 15px;
  `,
  IconWrapper: styled.div`
    position: relative;
    background: #ffffff;
    padding: 3px 9px;
    border-radius: 100px;
    &:hover {
      background: #a39f9f96;
    }
  `,
  CountWrapper: styled.div`
    position: absolute;
    background: #16c67a;
    width: fit-content;
    top: 3px;
    right: 0px;
    transform: translate(8px, -8px);
    padding: 3px 6px;
    margin-left: 15px;
    border-radius: 100px;
  `,
};
const CartIconWithCount = () => {
  const basketCollection = useSelector((state) => state.basket);

  const cartCounter = () => {
    let result = 0;
    basketCollection.forEach((item) => {
      result += item.count;
    });
    return result;
  };
  return (
    <>
      {basketCollection.length && (
        <Styled.LocationIcon>
          <NavLink to={"/cart"}>
            <Styled.IconWrapper>
              <CartIcon />
              <Styled.CountWrapper>{cartCounter()}</Styled.CountWrapper>
            </Styled.IconWrapper>
          </NavLink>
        </Styled.LocationIcon>
      )}
    </>
  );
};

export default CartIconWithCount;
