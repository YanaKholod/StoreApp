import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    background-image: url(${({ bckgrImg }) => bckgrImg});
  `,
  WrapperInfo: styled.div`
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    width: max-content;
    height: max-content;
    background-color: rgba(255, 255, 255, 0.631);
    border-radius: 30px;
    padding: 38px 46px;
  `,
  CarouselText: styled.p`
    color: rgb(31, 28, 24);
    font-size: 50px;
  `,
  CarouselButton: styled.button`
    background-color: #4b4949;
    border: 2px solid #070000;
    border-radius: 40rem;
    color: #ffffff;
    cursor: pointer;
    font-size: 25px;
    margin: 0;
    padding: 16px 24px;
    min-height: 60px;
    outline: none;
    &:hover {
      background-color: #ae6bdb;
      box-shadow: #61228b 0 -3px 6px inset;
    }
  `,
};
const CarouselItem = ({ item }) => {
  const history = useNavigate();

  const handleClick = () => {
    history({
      pathname: "/catalog",
      search: `?category=${item.categoryName}`,
    });
  };

  return (
    <Styled.Wrapper bckgrImg={item.imgUrl}>
      <Styled.WrapperInfo>
        <Styled.CarouselText>{item.imgText}</Styled.CarouselText>
        <Styled.CarouselButton onClick={() => handleClick()}>
          {item.buttonText}
        </Styled.CarouselButton>
      </Styled.WrapperInfo>
    </Styled.Wrapper>
  );
};

export default CarouselItem;
