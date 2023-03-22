import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../Modal";
import queryString from "query-string";
const Styled = {
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 200px;
    height: max-content;
    margin: 18px 21px;
    border-radius: 8px;
    padding: 10px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 10px,
        rgba(0, 0, 0, 0.08) 0px -7px 15px, rgba(0, 0, 0, 0.08) 0px 4px 6px,
        rgba(0, 0, 0, 0.08) 0px 7px 8px, rgba(0, 0, 0, 0.08) 0px -3px 5px;
    }
    @media (max-width: 668px) {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      width: 300px;
      height: 400px;
      margin: 0 21px;
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
    background: #7f5feb;
    color: #dfdeee;
    box-shadow: #61228b 0 -4px 8px inset;
    font-size: 15px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    ${({ isActive }) =>
      isActive
        ? "background: #16c67a; color:  #000704; box-shadow:  #0b9b5d 0 -3px 6px inset; transition: all 0.5s ease-in-out;"
        : ""}
  `,
  Span: styled.span`
    font-weight: 700;
  `,
  H2: styled.h2`
    display: block;
    font-size: 20px;
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

const ShopItemCard = ({ item, handleItemToBasket, activeItemId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  useEffect(() => {
    if (activeItemId === item.id.toString()) {
      setShowModal(true);
    }
  }, [activeItemId]);

  const handleAddItemToBasket = (item) => {
    handleItemToBasket(item);
    setIsActive(!isActive);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  const openModal = () => {
    setShowModal(true);
    const usedQuery = queryParamsData();
    history({
      pathname: location.pathname,
      search: `?${usedQuery}&itemsId=${item.id}`,
    });
  };

  const closeModal = () => {
    setShowModal(false);
    const usedQuery = queryParamsData(true);
    history({
      pathname: location.pathname,
      search: usedQuery,
    });
  };

  const queryParamsData = (deleteLastParam = false) => {
    let queryString = "";
    if (deleteLastParam) {
      const totalQueryLength = Object.keys(parsed).length;
      const queryParamsItems = Object.keys(parsed);
      queryParamsItems.forEach((paramName, index) => {
        if (index === totalQueryLength - 1) {
          return;
        } else {
          queryString += `${paramName}=${parsed[paramName]}`;
        }
      });
    } else {
      for (let key in parsed) {
        queryString += `${key}=${parsed[key]}`;
      }
    }
    return queryString;
  };

  return (
    <>
      <Styled.CardWrapper key={item.id}>
        <Styled.WrapperInfo
          onClick={() => {
            openModal();
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
          <Styled.Button
            onClick={() => handleAddItemToBasket(item)}
            isActive={isActive}
          >
            {isActive ? "✓" : "Buy now"}
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.CardWrapper>
      {showModal && (
        <Modal
          item={item}
          purchaseAction={handleAddItemToBasket}
          onModalClose={() => {
            closeModal();
          }}
        />
      )}
    </>
  );
};

export default ShopItemCard;
