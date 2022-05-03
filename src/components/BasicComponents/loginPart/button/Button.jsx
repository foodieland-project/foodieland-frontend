import React from "react";

function Button({ prop, type }) {
  return (
    <button
      className="bg-[#9155FD] uppercase text-white w-full rounded-md py-2"
      type={type}
    >
      {prop}
    </button>
  );
}

export default Button;
