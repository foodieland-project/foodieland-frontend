import SubscribeCard from "../../../components/subscribeCard";
import React from "react";
import RecommendedRecipes from "../../../components/recommendedRecipes";
import UserLayout from "../../../layouts/userLayout";

const NotFound = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <div className="h-[500px] flex flex-col justify-center items-center">
            <h1 className="font-medium text-[96px] mt-5 sm:mt-10 text-center justify-center items-center lg:mt-20 mb-3 md:mb-6 sm:leading-[58px]">
              404
            </h1>
            <p className="font-medium text-[24px] mt-5 sm:mt-10 text-center justify-center items-center lg:mt-20 mb-3 md:mb-6 sm:leading-[58px]">
              Page Not Found ⚠️
            </p>
          </div>
          <SubscribeCard />
          <RecommendedRecipes />
        </div>
      </UserLayout>
    </>
  );
};

export default NotFound;
