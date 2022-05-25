import React from "react";
import { Link } from "react-router-dom";

function Category({ id, imageUrl, name, bgColor }) {
  return (
    <div className="basis-[24%] lg:basis-[14%] h-[160px] md:h-[190px] xl:h-[200px] cursor-pointer rounded-3xl overflow-hidden my-4 hover:scale-110 transition-all">
      <Link to={`/recipes?category=${id}`}>
        <div>
          <img
            src={`${imageUrl}`}
            alt="breakfast"
            className="mx-auto w-[80px] md:w-[100px] lg:w-[80px] xl:w-[100px]"
          />
        </div>
        <div
          className={`${bgColor}   text-center font-semibold text-lg py-11 `}
        >
          <span className="capitalize">{name}</span>
        </div>
      </Link>
    </div>
  );
}

export default Category;
