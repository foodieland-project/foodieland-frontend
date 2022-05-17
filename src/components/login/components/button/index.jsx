import React from "react";

function Button({ children, type }) {
  return (
    <button
      className="bg-mainBlue uppercase text-white w-full rounded-md py-2"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
