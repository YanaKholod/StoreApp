import React from "react";
import { useForm } from "react-hook-form";

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
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  console.log("errors", errors);
  return (
    <div>
      Login
      <form>
        {loginInputsData.map((field) => {
          return (
            <div key={field.id}>
              <label>
                <p>{field.labelName}</p>
                <input
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

export default Login;
