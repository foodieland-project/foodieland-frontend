import React from "react";
import Directions from "../../../BasicComponents/directions";
import RecipeDetails from "../../../BasicComponents/recipeDetails"
import Ingredients from "../../../BasicComponents/ingredients"
import RecommendedRecipes from "../../../BasicComponents/recommendedRecipes";
import SubscribeCard from "../../../BasicComponents/subscribeCard";
import UserLayout from "../../../layout/userLayout";

const Recipes = () => {
  return (
    <div>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <RecipeDetails />
          <Ingredients />
          <Directions />
          <SubscribeCard />
          <RecommendedRecipes
            title={"You may like these recipes too "}
            length={4}
          />
        </div>
      </UserLayout>
    </div>
  );
};

export default Recipes;
