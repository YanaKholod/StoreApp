import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FacebookIcon from "../components/icons/FacebookIcon";
import InstaIcon from "../components/icons/InstaIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

const IMG_BACKGROUND =
  "https://img.freepik.com/premium-photo/purple-texture-crumpled-background_23-2148383531.jpg?w=1480";
const socialMedia = [
  { id: 0, icon: <InstaIcon />, linkTo: "https://www.instagram.com/" },
  { id: 1, icon: <TwitterIcon />, linkTo: "https://twitter.com/?lang=ru" },
  { id: 2, icon: <FacebookIcon />, linkTo: "https://uk-ua.facebook.com/" },
];
const Styled = {
  PageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  `,
  FormatWrapper: styled.div`
    display: flex;
    margin-top: 40px;
    @media (max-width: 780px) {
      flex-direction: column;
    } ;
  `,
  TextContent: styled.div`
    display: flex;
    flex-direction: column;
    span {
      white-space: pre-wrap;
      width: 400px;
      font-size: 23px;
    }
    @media (max-width: 450px) {
      span {
        width: 250px;
        font-size: 18px;
      }
    } ;
  `,
  ImgContent: styled.div`
    width: 100%;
  `,
  FirstImg: styled.div`
    img {
      border-radius: 100%;
      width: 300px;
      height: 300px;
    }
    @media (max-width: 590px) {
      img {
        width: 200px;
        height: 200px;
      }
    } ;
  `,
  SecondImg: styled.div`
    transform: translate(130px, -60px);
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-image: url(https://img.freepik.com/free-photo/fabric-textured-background_53876-30471.jpg?w=1480&t=st=1679062676~exp=1679063276~hmac=2696e9e172c5d2d0bfe46d7cc1cf0bdbc64314b124ccf2b3331579023c3bd7d3);
    div {
      padding-top: 75px;
    }
    @media (max-width: 590px) {
      width: 150px;
      height: 150px;
      transform: translate(70px, -30px);
      div {
        padding-top: 50px;
    } ;
  `,
  SocialIcons: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Link: styled(NavLink)`
    cursor: pointer;
    padding: 3px;
  `,
};
const AboutUs = () => {
  return (
    <Styled.PageWrapper>
      <Styled.FormatWrapper>
        <Styled.TextContent>
          <h1>Lorem ipsum</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </Styled.TextContent>
        <Styled.ImgContent>
          <Styled.FirstImg>
            <img src={IMG_BACKGROUND}></img>
          </Styled.FirstImg>
          <Styled.SecondImg>
            <Styled.SocialIcons>
              {socialMedia.map((item) => (
                <Styled.Link target="_blank" key={item.id} to={item.linkTo}>
                  {item.icon}
                </Styled.Link>
              ))}
            </Styled.SocialIcons>
          </Styled.SecondImg>
        </Styled.ImgContent>
      </Styled.FormatWrapper>
    </Styled.PageWrapper>
  );
};

export default AboutUs;
