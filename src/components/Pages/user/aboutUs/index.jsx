import React from "react";
import SubscribeCard from "../../../BasicComponents/subscribeCard";
import RecommendedRecipes from "../../../BasicComponents/recommendedRecipes";
import Chefs from "../../../BasicComponents/chefs";
import AboutUsInfo from "../../../BasicComponents/aboutUsInfo";
import UserLayout from "../../../layout/userLayout";

const Post = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <AboutUsInfo />
          <Chefs />
          <SubscribeCard />
          <RecommendedRecipes />
        </div>
      </UserLayout>
    </>
  );
};

export default Post;
