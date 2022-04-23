import React from "react";
import Directions from "../../BasicComponents/directions";
import Ingredients from "../../BasicComponents/ingredients";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import SubscribeCard from "../../BasicComponents/subscribeCard";

const Recipes = () => {
  return (
    <div>
      <Ingredients />
      <Directions />
      <SubscribeCard />
      <RecommendedRecipes />
    </div>
  );
};

export default Recipes;
