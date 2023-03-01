import React from "react";
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
    border-radius: 15px;
    color: #ffffff;
    cursor: pointer;
    font-size: 25px;
    margin: 0;
    padding: 16px 24px;
    min-height: 60px;
    outline: none;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  `,
};

const CarouselItem = ({ item }) => {
  return (
    <Styled.Wrapper bckgrImg={item.imgUrl}>
      <Styled.WrapperInfo>
        <Styled.CarouselText>{item.imgText}</Styled.CarouselText>
        <Styled.CarouselButton>{item.buttonText}</Styled.CarouselButton>
      </Styled.WrapperInfo>
    </Styled.Wrapper>
  );
};

export default CarouselItem;
