import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 25px;
      font-weight: 600;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    width: 400px;
    @media (max-width: 550px) {
      width: 250px;
    }
  `,
  Input: styled.input`
    box-sizing: border-box;
    margin-bottom: 5px;
    border: 1px solid #cdbaba47;
    border-radius: 5px;
    padding: 14px 7px;
    width: 100%;
    outline: none;
    color: #272626;
    &:focus {
      background: #ffffff;
      border: 2px solid #ae6bdb;
    }
    ::placeholder {
      color: #a29999;
    }
  `,
  Label: styled.label`
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  Errors: styled.div`
    color: #c10000;
    font-size: 12px;

    p {
      font-size: 12px;
      margin: 0;
    }
  `,
  Button: styled.button`
    border: 0;
    background: #7f5feb;
    color: #dfdeee;
    border-radius: 100px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 4px;
    padding: 5px 40px;
    position: relative;
    z-index: 10;

    &:hover {
      background: #5d33e6;
    }

    @media (max-width: 360px) {
      width: 190px;
      font-size: 13px;
    }
  `,
  FieldWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;
    width: 100%;
  `,
};
