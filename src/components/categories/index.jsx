import Category from "./categoriesCard";
import React from "react";
import { categoriesData } from "../../services/utils/data";
function Categories() {
  return (
    <section>
      <div className="w-full font-inter mx-auto my-20 lg:my-40">
        <div className="flex flex-col justify-between px-7 text-center md:flex-row  mb-20  ">
          <div className="mb-8 md:mb-0">
            <h1 className="font-semibold text-4xl lg:text-5xl">Categories</h1>
          </div>
          <div>
            <button className="bg-lameBlue font-semibold text-base p-2 rounded-2xl w-48 h-14 cursor-pointer hover:bg-darkBlue transition-all">
              View All Categories
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 xl:gap-8 px-2  flex-wrap">
          {categoriesData.map(({ id, name, imageUrl, bgColor, hoverBg }) => (
            <Category
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              bgColor={bgColor}
              hoverBg={hoverBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
