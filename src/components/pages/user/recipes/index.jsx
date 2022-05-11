import React from "react";
import Directions from "../../../basicComponents/directions";
import RecipeDetails from "../../../basicComponents/recipeDetails";
import Ingredients from "../../../basicComponents/ingredients";
import RecommendedRecipes from "../../../basicComponents/recommendedRecipes";
import SubscribeCard from "../../../basicComponents/subscribeCard";
import UserLayout from "../../../layout/userLayout";

const Recipes = () => {
  return (
    <div>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
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
