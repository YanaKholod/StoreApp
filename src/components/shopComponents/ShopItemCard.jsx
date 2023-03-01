import React from "react";
import s from "../CompStyles.module.css";
import styled from "styled-components";

const Styled = {
  CardWrapper: styled.div`
    max-width: 370px;
    margin: 21px 25px;
    border-radius: 8px;
    padding: 10px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  `,
  Img: styled.img`
    width: 100%;
    height: 100%;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
  `,
  Button: styled.button`
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background: rgba(146, 144, 144, 0.399);
    font-size: 17px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all 1s;
  `,
  Span: styled.span`
    font-weight: 700;
  `,
  DivWithoutStyle: styled.div``,
  H2: styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  `,
  DetailsDiv: styled.div`
    margin: 5px;
  `,
};

const ShopItemCard = ({ item, handleItemToBasket }) => {
  const handleAction = (item) => {
    handleItemToBasket(item);
  };

  return (
    <Styled.CardWrapper key={item.id}>
      <Styled.H2>{item.title} </Styled.H2>
      <Styled.Img src={item.img} />
      <Styled.DetailsDiv>
        <Styled.DivWithoutStyle>
          <Styled.Span>Category:</Styled.Span> {item.category}
        </Styled.DivWithoutStyle>
        <Styled.DivWithoutStyle>
          <Styled.Span>Description:</Styled.Span> {item.description}
        </Styled.DivWithoutStyle>
        <Styled.DivWithoutStyle>
          <Styled.Span>Price: </Styled.Span>${item.price}
        </Styled.DivWithoutStyle>
      </Styled.DetailsDiv>
      <Styled.ButtonWrapper>
        <Styled.Button onClick={() => handleAction(item)}>
          Buy now
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.CardWrapper>
  );
};

export default ShopItemCard;
