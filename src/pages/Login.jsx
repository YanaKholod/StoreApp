import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "../components/Styled";

const loginInputsData = [
  {
    id: 0,
    inputType: "email",
    inputName: "email",
    labelName: "Email",
    placeholder: "Enter your email",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 5,
        message: "Must be more than 5 symbols",
      },
    },
  },
  {
    id: 1,
    inputType: "password",
    labelName: "Password",
    placeholder: "Enter your password",
    inputName: "password",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 5,
        message: "Must be more than 5 symbols",
      },
    },
  },
];
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <Styled.Wrapper>
      <p> Login</p>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {loginInputsData.map((field) => {
          return (
            <Styled.FieldWrapper key={field.id}>
              <Styled.Label>
                {/* <p>{field.labelName}</p> */}
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
          <label></label>
          <Styled.Button type="submit" disabled={!isValid}>
            Submit
          </Styled.Button>
        </div>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default Login;
