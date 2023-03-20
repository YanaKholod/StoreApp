import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "./Styled";
import styled from "styled-components";

const sendingDataForm = [
  {
    id: 0,
    inputType: "text",
    inputName: "recipient",
    labelName: "Recipient",
    placeholder: "Enter your data",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 1,
        message: "Must be more than 1 symbols",
      },
    },
  },
  {
    id: 1,
    inputType: "email",
    inputName: "email",
    labelName: "Email",
    placeholder: "Enter your email",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 5,
        message: "Must be more than 1 symbol",
      },
    },
  },
  {
    id: 2,
    inputType: "tel",
    inputName: "phone",
    labelName: "Phone",
    placeholder: "Enter your phone",
    validationRules: {
      required: "Required field!",
      pattern: {
        value:
          /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
        message: "Must be 10 symbols",
      },
    },
  },
  {
    id: 3,
    inputType: "text",
    inputName: "country",
    labelName: "Country",
    placeholder: "Enter your country",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 5,
        message: "Must be more than 1 symbol",
      },
    },
  },
  {
    id: 4,
    inputType: "text",
    inputName: "city",
    labelName: "City",
    placeholder: "Enter your city",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 5,
        message: "Must be more than 1 symbol",
      },
    },
  },
];
Styled.SendingWrapper = styled.div`
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
`;
Styled.FormBackground = styled.div`
  padding: 25px;
  background-color: rgb(255, 255, 255);
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

const SendingForm = ({ onModalClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Data for sending:", data);
    reset();
    onModalClose(false);
  };

  return (
    <Styled.SendingWrapper>
      <Styled.FormBackground>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          {sendingDataForm.map((field) => {
            return (
              <Styled.FieldWrapper key={field.id}>
                <Styled.Label>
                  <Styled.Input
                    type={field.inputType}
                    {...register(field.inputName, field.validationRules)}
                    placeholder={field.placeholder}
                  ></Styled.Input>
                </Styled.Label>
                <Styled.Errors>
                  {errors[field.inputName] && (
                    <p>{errors[field.inputName].message}</p>
                  )}
                </Styled.Errors>
              </Styled.FieldWrapper>
            );
          })}
          <div>
            <Styled.Button type="reset" onClick={() => onModalClose(false)}>
              Cancel
            </Styled.Button>
            <Styled.Button type="submit" disabled={!isValid}>
              Submit
            </Styled.Button>
          </div>
        </Styled.Form>
      </Styled.FormBackground>
    </Styled.SendingWrapper>
  );
};

export default SendingForm;
