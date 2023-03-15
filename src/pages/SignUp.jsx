import React from "react";
import { useForm } from "react-hook-form";

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
        value: 5,
        message: "Must be more than 5 symbols",
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
    inputType: "text",
    inputName: "password",
    labelName: "Password",
    placeholder: "Enter your password",
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
    inputType: "text",
    inputName: "repeatPassword",
    labelName: "Repeat password",
    placeholder: "Enter your password",
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
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <div>
      Registration
      <form>
        {signUpInputsData.map((field) => {
          return (
            <div key={field.id}>
              <label>
                <p>{field.labelName}</p>
                <input
                  type={field.inputType}
                  {...register(field.inputName, field.validationRules)}
                  placeholder={field.placeholder}
                ></input>
              </label>
              <div>
                {errors[field.inputName] && (
                  <p>{errors[field.inputName].message}</p>
                )}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default SignUp;
