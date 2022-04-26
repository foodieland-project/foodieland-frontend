import React from "react";
import SubscribeCard from "../../BasicComponents/subscribeCard";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes";
import Chefs from "../../BasicComponents/chefs";
import AboutUsInfo from "../../BasicComponents/aboutUsInfo";

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
