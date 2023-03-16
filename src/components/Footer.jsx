import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../utils/staticData";

const Styled = {
  HeadWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #7f5feb;
    color: #dfdeee;
    height: max-content;
    padding: 15px;
    margin-top: 15px;
    @media (max-width: 550px) {
      flex-direction: column;
      padding: 7px;
    } ;
  `,
  WrapperMenu: styled.div`
    display: flex;
  `,
  FirstBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Div: styled.div`
    padding-top: 10px;
    font-size: 15px;
    font-weight: 700;
  `,

  MenuItem: styled(NavLink)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 17px;
    color: #dfdeee;
    font-weight: 500;
    margin-right: 9px;
    border-radius: 5px;
    @media (max-width: 900px) {
      display: none;
    }
  `,
  ContactsMenu: styled.div`
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  AboutTheCompany: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
      padding-bottom: 4px;
      font-size: 15px;
      font-weight: 700;
    }
    div {
      white-space: pre-wrap;
      width: 200px;
      font-size: 10px;
    }
    @media (max-width: 550px) {
      display: none;
    }
  `,
};
const Footer = () => {
  return (
    <Styled.HeadWrapper>
      <Styled.FirstBlock>
        <Styled.WrapperMenu>
          {menuData.map((item) => (
            <Styled.MenuItem key={item.id} to={item.link}>
              {item.title}
            </Styled.MenuItem>
          ))}
        </Styled.WrapperMenu>
        <Styled.Div>Yana Kholod © 2023</Styled.Div>
      </Styled.FirstBlock>
      <Styled.ContactsMenu>
        <div> Zaporizhzhia, Ukraine</div>
        <div>+38 (099) 0141005</div>
        <div>kholodjana1507@gmail.com</div>
      </Styled.ContactsMenu>
      <Styled.AboutTheCompany>
        <p>About the company</p>
        <div>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </div>
      </Styled.AboutTheCompany>
    </Styled.HeadWrapper>
  );
};

export default Footer;
