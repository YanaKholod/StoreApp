import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const Styled = {
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    height: max-content;
    margin: 21px 25px;
    border-radius: 8px;
    padding: 10px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 10px,
        rgba(0, 0, 0, 0.08) 0px -7px 15px, rgba(0, 0, 0, 0.08) 0px 4px 6px,
        rgba(0, 0, 0, 0.08) 0px 7px 8px, rgba(0, 0, 0, 0.08) 0px -3px 5px;
    }
  `,
  WrapperInfo: styled.div`
    justify-content: space-between;
  `,
  Img: styled.img`
    width: 100%;
    max-height: 200px;
    height: 200px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    z-index: 5;
  `,
  Button: styled.button`
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    background: rgba(146, 144, 144, 0.399);
    font-size: 15px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  `,
  Span: styled.span`
    font-weight: 700;
  `,
  H2: styled.h2`
    display: block;
    font-size: 20px;
    // margin-block-start: 0.83em;
    // margin-block-end: 0.83em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    font-weight: bold;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  DetailsDiv: styled.div`
    text-overflow: ellipsis;
    margin: 5px;
  `,
};

const ShopItemCard = ({ item, handleItemToBasket }) => {
  const handleAddItemToBasket = (item) => {
    handleItemToBasket(item);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Styled.CardWrapper key={item.id}>
        <Styled.WrapperInfo
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Styled.H2>{item.title} </Styled.H2>
          <Styled.Img src={item.img} />
          <Styled.DetailsDiv>
            <div>
              <Styled.Span>Category:</Styled.Span> {item.category}
            </div>
            <div>
              <Styled.Span>Price: </Styled.Span>${item.price}
            </div>
          </Styled.DetailsDiv>
        </Styled.WrapperInfo>
        <Styled.ButtonWrapper>
          <Styled.Button onClick={() => handleAddItemToBasket(item)}>
            Buy now
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.CardWrapper>
      {showModal && (
        <Modal
          item={item}
          purchaseAction={handleAddItemToBasket}
          onModalClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ShopItemCard;
