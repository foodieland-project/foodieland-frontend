import React from "react";

function Button({prop}) {
  return (
    <button className="bg-[#9155FD] uppercase text-white w-full rounded-md py-2">
      {prop}
    </button>
  );
}

export default Button;
