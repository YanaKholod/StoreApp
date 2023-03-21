import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteOneItemFromBasket,
  removeItemFromBasket,
  addItemToBasket,
} from "../store/shopSlice";
import styled from "styled-components";
import BasketIcon from "../components/icons/BasketIcon";
import PlusIcon from "../components/icons/PlusIcon";
import MinusIcon from "../components/icons/MinusIcon";
import SendingForm from "../components/SendingForm";

const Styled = {
  HeadWrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 25px;
      font-weight: 600;
    }
    @media (max-width: 320px) {
      p {
        font-size: 20px;
        margin: 10px 0;
      }
    }
  `,
  Wrapper: styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 7px;
    padding: 10px 0;
    box-shadow: #61228b 0 0 2px inset;
    @media (max-width: 320px) {
      padding: 3px 0;
    }
  `,
  Container: styled.div`
    display: flex;
    margin: auto;
    width: 90%;
    height: 30%;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    @media (max-width: 320px) {
      display: flex;
      flex-direction: column;
    }
  `,
  Img: styled.img`
    margin: 10px;
    height: 40px;
    width: 50px;
    @media (max-width: 320px) {
      width: 30px;
      height: 40px;
    }
  `,
  Button: styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 25px;
    border: 2px solid rgb(231, 50, 50);
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0 10px #333;
    overflow: hidden;
    margin-bottom: 5px;
    @media (max-width: 320px) {
      width: 30px;
      height: 30px;
    }
  `,
  CounterWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 25px;
  `,
  TitleDiv: styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 75%);
    @media (max-width: 320px) {
      width: 100%;
    }
  `,
  NoItemsDiv: styled.div`
    font-size: 40px;
    font-weight: 300;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: #61228b 0 -4px 8px inset;
  `,
  TotalSum: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    background-color: #ffffff;
    p {
      font-size: 18px;
      margin: 20px 20px;
    }
    button {
      display: flex;
      align-items: center;
      margin: 20px 30px;
      padding: 7px 15px;
      border: 0;
      background: #7f5feb;
      color: #dfdeee;
      border-radius: 100px;
      height: 50px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background: #5d33e6;
      }
    }
  `,
};

const Cart = () => {
  const [showModalForm, setShowModalForm] = useState(false);
  const basketCollection = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  let totalResult = 0;
  const totalCounter = () => {
    basketCollection.forEach((item) => {
      const itemCount = item.count;
      const itemPrice = item.price;
      const sum = itemCount * itemPrice;
      totalResult += sum;
    });
  };

  const handleDeleteItem = (index) => {
    dispatch(removeItemFromBasket(index));
  };
  const deleteOneItem = (item) => {
    dispatch(deleteOneItemFromBasket(item));
  };
  const handleItemToBasket = (item) => {
    dispatch(addItemToBasket(item));
  };
  totalCounter();
  return (
    <>
      <Styled.HeadWrapper>
        <p>Cart</p>
        {basketCollection.length ? (
          <>
            {basketCollection.map((item, index) => (
              <Styled.Wrapper key={index}>
                <Styled.Container>
                  <Styled.Img src={item.img} alt={item.title} />
                  <Styled.TitleDiv>{item.title} </Styled.TitleDiv>
                  <div> {item.category}</div>
                  <div> ${item.price}</div>
                  <Styled.CounterWrapper>
                    <div onClick={() => handleItemToBasket(item)}>
                      <PlusIcon />
                    </div>
                    {item.count}
                    <div onClick={() => deleteOneItem(item)}>
                      <MinusIcon />
                    </div>
                  </Styled.CounterWrapper>
                  <div>
                    <Styled.Button onClick={() => handleDeleteItem(index)}>
                      <BasketIcon color={"rgb(231, 50, 50)"} />
                    </Styled.Button>
                  </div>
                </Styled.Container>
              </Styled.Wrapper>
            ))}
            <Styled.TotalSum>
              <p>Total: ${totalResult.toFixed(2)}</p>
              <button
                onClick={() => {
                  setShowModalForm(true);
                }}
              >
                Make an order
              </button>
            </Styled.TotalSum>
          </>
        ) : (
          <Styled.NoItemsDiv>No items in cart</Styled.NoItemsDiv>
        )}
      </Styled.HeadWrapper>
      {showModalForm && (
        <SendingForm onModalClose={() => setShowModalForm(false)} />
      )}
    </>
  );
};

export default Cart;
