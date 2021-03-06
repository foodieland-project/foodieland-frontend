import React, { useState } from "react";
import { icons } from "../../../../services/utils/icons";
import { Link } from "react-router-dom";

const MoreRecipeCard = ({ img, title, category, cookTime, id }) => {
  const [like, setLike] = useState(true);

  return (
    <div className="flex flex-col basis-[85%] md:basis-[40%] lg:basis-[30%] xl:basis-[23%] h-[320px] pb-8  rounded-3xl relative">
      <Link to={`/recipe/${id}`}>
        <div className="h-[230px] hover:scale-105 transition-all rounded-3xl w-full">
          <img
            src={img}
            alt="product"
            className=" block w-full h-full rounded-3xl object-cover"
          />
        </div>
      </Link>
      <div className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[12px] right-[16px] ">
        <span
          onClick={() => setLike((prev) => !prev)}
          className="w-[20.25px] h-[18px] inline-block cursor-pointer"
        >
          {like ? icons.whiteHeat() : icons.redHeat()}
        </span>
      </div>
      <Link to={`/recipe/${id}`}>
        <div>
          <h2 className="text-lg font-semibold mt-1 tracking-[-0.04em] leading-[26px] text-black">
            {title}
          </h2>
        </div>
      </Link>
      <div className="flex items-center absolute bottom-2 mt-3 font-medium text-sm leading-[17px] tracking-[-0.02em] text-[rgba(0,0,0,0.6)]">
        <div className="flex items-center mr-3">
          <span className="inline-block pr-2">{icons.timer()}</span>
          {cookTime}
        </div>
        <div className="flex items-center">
          <span className="inline-block ">{icons.fork()}</span>
          <span className="inline-block pr-2">{icons.knife()}</span>
          {category}
        </div>
      </div>
    </div>
  );
};

export default MoreRecipeCard;
