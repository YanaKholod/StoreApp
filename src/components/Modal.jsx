import React from "react";
// import s from "./CompStyles.module.css";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
  `,
  Content: styled.div`
    background-color: #ffffff;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    /* height: 600px; */
    max-height: 700px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: -20px 20px 35px 1px rgb(10 49 86 / 18%);
  `,
  Img: styled.img`
    max-width: 250px;
    width: 100%;
    max-height: 400px;
    height: 300px;
    display: block;
    margin: 0 auto;
  `,
  Span: styled.span`
    font-weight: bold;
  `,
  ButtonWrap: styled.div`
    display: flex;
    justify-content: end;
    margin-top: 15px;
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
};
const Modal = ({ purchaseAction, onModalClose, item }) => {
  return (
    <Styled.Wrapper onClick={() => onModalClose(false)}>
      <Styled.Content>
        <div>
          <h2>{item.title}</h2>
        </div>
        <Styled.Img src={item.img} />
        <div>
          <Styled.Span>Category: </Styled.Span>
          {item.category}
        </div>
        <div>
          <Styled.Span>Price: $ </Styled.Span>
          {item.price}
        </div>
        <div>
          <Styled.Span>Description: </Styled.Span>
          {item.description}
        </div>
        <Styled.ButtonWrap>
          <Styled.Button onClick={() => purchaseAction(item)}>
            Buy now
          </Styled.Button>
        </Styled.ButtonWrap>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
