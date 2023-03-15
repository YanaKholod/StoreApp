import React from "react";
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

const Styled = {
  HeadWrapper: styled.div`
    margin: 0;
    padding: 0;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Wrapper: styled.div`
    width: 70%;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0px 25px 40px #1687d933;
  `,
  Container: styled.div`
    display: flex;
    margin: auto;
    width: 90%;
    height: 30%;
    justify-content: space-between;
    align-items: baseline;
    font-size: 17px;
  `,
  Img: styled.img`
    margin: 10px;
    height: 40px;
    width: 50px;
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
  `,
  NoItemsDiv: styled.div`
    font-size: 60px;
    font-weight: 300;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: #1687d933 0px 7px 29px 0px;
  `,
};

const Basket = () => {
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
    <Styled.HeadWrapper>
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
                    <BasketIcon
                      width={25}
                      height={25}
                      color={"rgb(231, 50, 50)"}
                    />
                  </Styled.Button>
                </div>
              </Styled.Container>
            </Styled.Wrapper>
          ))}
          <div>{totalResult}</div>
        </>
      ) : (
        <Styled.NoItemsDiv>No items in basket</Styled.NoItemsDiv>
      )}
    </Styled.HeadWrapper>
  );
};

export default Basket;
