import { useState, useEffect } from "react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  const hasError = !isValid && (isTouched || props.onSubmit);

  useEffect(() => {
    if (props.id === "email") {
      setIsValid(isEmail(enteredValue));
      props.onChange({
        id: props.id,
        value: enteredValue,
        isValid,
      });
    } else {
      setIsValid(isNotEmpty(enteredValue));
      props.onChange({
        id: props.id,
        value: enteredValue,
        isValid,
      });
    }
  }, [enteredValue, isValid]);

  const inputClasses = `border p-5 rounded-2xl text-sm mb-6 text-black/60 ${
    hasError
      ? "border-red-600 bg-red-300/10"
      : "border-gray-900/10 bg-transparen"
  }`;

  return (
    <div className="flex flex-col font-inter ">
      <label
        className="text-xs font-medium mb-3 tracking-wide opacity-80"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        onChange={valueChangeHandler}
        onBlur={valueBlurHandler}
        className={inputClasses}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
