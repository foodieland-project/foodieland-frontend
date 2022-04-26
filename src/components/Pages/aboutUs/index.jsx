import SubscribeCard from "../../BasicComponents/subscribeCard";
import React from "react";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
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
