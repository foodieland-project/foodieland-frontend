import React from "react";
import Directions from "../../BasicComponents/directions";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import SubscribeCard from "../../BasicComponents/subscribeCard";

const Recipes = () => {
  return (
    <div>
      <Directions />
      <SubscribeCard />
      <RecommendedRecipes />
    </div>
  );
};

export default Recipes;
