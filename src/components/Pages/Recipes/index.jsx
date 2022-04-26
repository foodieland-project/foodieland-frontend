import React from "react";
import Directions from "../../BasicComponents/directions";
import RecipeDetails from "../../BasicComponents/recipeDetails"
import Ingredients from "../../BasicComponents/ingredients"
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import SubscribeCard from "../../BasicComponents/subscribeCard";

const Recipes = () => {
  return (
    <div>
      <RecipeDetails />
      <Ingredients />
      <Directions />
      <SubscribeCard />
      <RecommendedRecipes
        title={"You may like these recipes too "}
        length={4}
      />
    </div>
  );
};

export default Recipes;
