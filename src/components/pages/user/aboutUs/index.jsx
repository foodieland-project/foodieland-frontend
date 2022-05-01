import React from "react";
import SubscribeCard from "../../../basicComponents/subscribeCard";
import RecommendedRecipes from "../../../basicComponents/recommendedRecipes";
import Chefs from "../../../basicComponents/chefs";
import AboutUsInfo from "../../../basicComponents/aboutUsInfo";
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
