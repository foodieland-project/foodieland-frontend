import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./components/recipeCard";

const Recipe = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  return (
    <div className="flex flex-col justify-center mb-28 xl:mb-[240px] font-inter">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-center text-4xl lg:text-5xl mb-[24px]">
          Simple and tasty recipes
        </h2>
        <p className=" font-normal text-center text-secondary text-sm md:text-base mb-[96px] sm:mb-[80px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {recipes.slice(0, 9).map(({ title, img, category, id }) => (
          <RecipeCard
            key={id}
            id={id}
            title={title}
            img={img}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
