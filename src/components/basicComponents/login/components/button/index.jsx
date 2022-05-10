import React from "react";

function Button({ children, type }) {
  return (
    <button
      className="bg-[#9155FD] uppercase text-white w-full rounded-md py-2 mt-2"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
