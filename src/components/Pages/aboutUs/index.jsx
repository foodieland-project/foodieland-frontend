import SubscribeCard from "../../BasicComponents/subscribeCard";
import React from "react";
import { icons } from "../../../utils/icons";
import RecipeVideoCard from "../../BasicComponents/recipeVideoCard";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import Galleries from "../../BasicComponents/galleries";
import Chefs from "../../BasicComponents/chefs";
import AboutUsInfo from "../../BasicComponents/aboutUsInfo/index.";

const Post = () => {
  return (
    <>
      <AboutUsInfo />
      <Chefs />
      <SubscribeCard />
      <RecommendedRecipes />
    </>
  );
};

export default Post;
