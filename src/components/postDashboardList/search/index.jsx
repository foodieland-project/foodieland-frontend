import React, { useState } from "react";
import { icons } from "../../../services/utils/icons";

function Search({ setValueSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setValueSearch(inputValue);
    }
  };

  return (
    <>
      <div className="rounded-md border-[1px] border-gray-400 flex justify-start w-[50%]">
        <button
          className="rounded-md w-[30px] h-[30px] bg-lameBlue hover:bg-darkBlue transition-all font-inter mr-[10px] flex justify-center items-center"
          onClick={() => setValueSearch(inputValue)}
        >
          {icons.search()}
        </button>
        <input
          className="text-left w-[70%]4 outline-none"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
          placeholder="write something"
        />
      </div>
    </>
  );
}

export default Search;
