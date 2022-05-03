import React from "react";

const Input = ({ placeholder, type, onChange, value, name,className}) => (
  <input
    className="w-full border-2 rounded-md p-3 mb-4"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    name={name}
  />
);

export default Input;
