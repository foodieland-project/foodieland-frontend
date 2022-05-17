import React, { useState } from "react";
import { validate } from "../validator/validators";

const INPUT_STATES = {
  UNTOUCHED: "UNTOUCHED",
  VALID: "VALID",
  INVALID: "INVALID",
};

function Input({ placeholder, type, validators, errorText }) {
  const [input, setInput] = useState(INPUT_STATES.UNTOUCHED);

  function handleError(e) {
    if (validate(e.target.value, validators)) {
      setInput(INPUT_STATES.VALID);
    } else {
      setInput(INPUT_STATES.INVALID);
    }
  }
  function handleChange(e) {
    if (input !== INPUT_STATES.UNTOUCHED) {
      handleError(e);
    }
  }

  return (
    <div>
      <input
        className="w-full border-2 rounded-md p-3 outline-none"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleError}
      />
      <p
        className={`${
          (input === "VALID" || input === "UNTOUCHED") && "pt-3"
        } pl-1 text-left text-red-500 text-sm font-medium `}
      >
        {input === "INVALID" ? errorText : ""}
      </p>
    </div>
  );
}

export default Input;
