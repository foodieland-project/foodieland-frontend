import RecipeVideoCard from "../recipeVideoCard";
import NutritionInfoCard from "./components/nutritionInfoCard";
import React from "react";
import { icons } from "../../services/utils/icons";
import { nutritionInfo } from "../../services/utils/data";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function RecipeDetails() {
  const timerIcon = icons.timer();
  const forkIcon = icons.fork();
  const knifeIcon = icons.knife();
  const printerIcon = icons.printer();
  const shareIcon = icons.share();
  const { recipes } = useSelector((state) => state.recipes);
  const { id } = useParams();
  const recipe = recipes.filter((r) => r.id == id);
  const {
    title,
    video,
    description,
    cook_time: cookTime,
    prep_time: prepTime,
    nutrition,
    chef,
    category,
  } = recipe[0];
  return (
    <section>
      <div className="w-11/12 xl:w-full mx-auto mt-20 flex flex-wrap gap-4 font-inter">
        <div className="basis-full   lg:basis-[66%] ">
          <div className="text-center">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl ">
              {title}
            </h1>
          </div>
          <div className="flex justify-end lg:justify-start flex-wrap gap-6 sm:gap-2 md:gap-4 my-12">
            <div className="basis-[44%] sm:basis-[23%] flex border-r border-gray-300 border-solid ">
              <div>
                <img
                  src="./images/Ellipse 2.png"
                  alt="chief"
                  className="mx-auto w-4/5"
                />
              </div>
              <div className=" ml-2 ">
                <span className="font-bold block text-xs md:text-sm xl:text-base">
                  {chef}
                </span>
                <span className="carousel-gray-text-color text-2xs xl:text-xs  font-medium">
                  12 March 2022
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center sm:border-r border-gray-300 border-solid">
              <span>{timerIcon}</span>
              <div className="ml-2">
                <span className="font-medium text-xs block">PREP TIME</span>
                <span className="text-sm font-medium text-secondary ">
                  {prepTime}
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center border-r border-gray-300 border-solid pl-3 sm:pl-0">
              <span>{timerIcon}</span>
              <div className="ml-2">
                <span className="font-medium text-xs block">COOK TIME</span>
                <span className="text-sm font-medium text-secondary ">
                  {cookTime}
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center text-sm md:text-base">
              <span className="inline-block ">{forkIcon}</span>
              <span className="inline-block pr-2">{knifeIcon}</span>
              {category}
            </div>
          </div>
          <RecipeVideoCard videoUrl={video} />
        </div>
        <div className="basis-full lg:basis-[30%] flex flex-col justify-between">
          <div className="flex justify-center lg:justify-end py-8">
            <div className="text-center">
              <div className="bg-lameBlue rounded-[50%] mb-2 p-7 hover:bg-darkBlue transition-all cursor-pointer">
                <span>{printerIcon}</span>
              </div>
              <span className="text-xs font-medium">PRINT</span>
            </div>
            <div className="text-center ml-4">
              <div className="bg-lameBlue rounded-[50%] mb-2 p-7 hover:bg-darkBlue transition-all cursor-pointer">
                <span>{shareIcon}</span>
              </div>
              <span className="text-xs font-medium">SHARE</span>
            </div>
          </div>
          <NutritionInfoCard nutrition={nutrition} />
        </div>
        <div className="mt-10">
          <p className="text-secondary text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetails;
