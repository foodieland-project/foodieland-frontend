import React from "react";

function Category({ imageUrl, name, bgColor }) {
  return (
    <div className="basis-[24%] lg:basis-[14%] h-[160px] md:h-[190px] xl:h-[200px] cursor-pointer rounded-3xl overflow-hidden my-4 hover:scale-110 transition-all">
      <div>
        <img
          src={`${imageUrl}`}
          alt="breakfast"
          className="mx-auto w-[80px] md:w-[100px] lg:w-[80px] xl:w-[100px]"
        />
      </div>
      <div className={`${bgColor}   text-center font-semibold text-lg py-11 `}>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Category;
