import React from "react";
import { menuData } from "../utils/mockData";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    background-color: rgba(167, 167, 167, 0.604);
  `,
  Item: styled.div`
    list-style-type: none;
    margin: 40px;
  `,
  Link: styled(Link)`
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    font-size: 25px;
    &:hover {
      opacity: 0.75;
    }
  `,
};
const Menu = () => {
  return (
    <Styled.Wrapper>
      {menuData.map((item) => (
        <Styled.Item key={item.id}>
          <Styled.Link to={item.link}>{item.title}</Styled.Link>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Menu;
