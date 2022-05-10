import React from "react";

const Input = (props) => (
  <div className="flex flex-col font-inter">
    <label
      className="text-md font-medium my-2 tracking-wide"
      htmlFor={props.type}
    >
      {props.label}
    </label>
    <input
      className="w-full border-2 rounded-md p-3 mb-4 outline-none"
      type={props.type}
      placeholder={props.placeholder}
      /* onChange={onChange} */
      value={props.value}
      id={props.id}
      name={props.name}
    />
  </div>
);

export default Input;
