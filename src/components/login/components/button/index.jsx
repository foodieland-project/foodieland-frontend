import React from "react";

function Button({ children, type }) {
  return (
    <button
      className="bg-mainBlue uppercase text-white w-full rounded-md py-2 hover:bg-darkerBlue transition-all"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
