import React from "react";
import Directions from "../../BasicComponents/directions";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import SubscribeCard from "../../BasicComponents/subscribeCard";

const Recipes = () => {
  return (
    <div>
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
