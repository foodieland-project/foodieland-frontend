import { useState } from "react";
import React from 'react'

function DirectionCard({ title, description, number, imageUrl, imageDesc }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="flex gap-2 md:gap-6 border-b border-gray-300 border-solid mb-10 pb-16">
      <div className="relative pt-1.5">
        <input
          type="checkbox"
          id="1"
          className="w-6 h-6 absolute opacity-0 cursor-pointer"
          onClick={() => setChecked(!isChecked)}
        />
        <label htmlFor="1" className="flex ">
          <span
            className={`${isChecked ? "custom-checkbox" : ""
              } w-5 h-5 md:w-6 md:h-6 rounded-[50%] border-2 border-solid border-black `}
          ></span>
        </label>
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-2xl mb-5  ">
          <span>{number + 1}.</span>
          <span>{title}</span>
        </h2>
        <p className="text-secondary text-justify text-sm md:text-base">
          {description}
        </p>
        {imageUrl && (
          <div className="mt-10 ">
            <img src={`${imageUrl}`} alt="" />
            <p className="text-secondary mt-10 text-justify text-sm md:text-base">
              {imageDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DirectionCard;
