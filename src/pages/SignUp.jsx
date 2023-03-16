import React from "react";
import { useForm } from "react-hook-form";
import { Styled } from "../components/Styled";

const signUpInputsData = [
  {
    id: 0,
    inputType: "text",
    inputName: "firstName",
    labelName: "First name",
    placeholder: "Enter your first name",
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
    inputType: "text",
    inputName: "lastName",
    labelName: "Last name",
    placeholder: "Enter your last name",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 3,
        message: "Must be more than 3 symbols",
      },
    },
  },

  {
    id: 2,
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
    id: 3,
    inputType: "tel",
    inputName: "phone",
    labelName: "Phone",
    placeholder: "Enter your phone",
    validationRules: {
      required: "Required field!",
      pattern: {
        value:
          /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
        message: "ust be more than 5 symbols",
      },
    },
  },
  {
    id: 4,
    inputType: "password",
    inputName: "password",
    labelName: "Password",
    placeholder: "Enter password",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 10,
        message: "Must be more than 3 symbols",
      },
    },
  },
  {
    id: 5,
    inputType: "password",
    inputName: "repeatPassword",
    labelName: "Repeat password",
    placeholder: "Repeat password",
    validationRules: {
      required: "Required field!",
      minLength: {
        value: 10,
        message: "Must be more than 3 symbols",
      },
    },
  },
];
const SignUp = () => {
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
      <p>Registration</p>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        {signUpInputsData.map((field) => {
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
          <Styled.Button type="submit" disabled={!isValid}>
            Submit
          </Styled.Button>
        </div>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default SignUp;
