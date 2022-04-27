import React from "react";
import Carousel from "../../../BasicComponents/Carousel";
import Recipe from "../../../BasicComponents/recipe";
import Cooker from "../../../BasicComponents/cooker";
import MoreRecipe from "../../../BasicComponents/moreRecipe";
import SubscribeCard from "../../../BasicComponents/subscribeCard";
import Categories from "../../../BasicComponents/categories";
import FoodieLandInstagram from "../../../BasicComponents/instagram";
import UserLayout from "../../../layout/userLayout";

function Home() {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <Carousel />
          <Categories />
          <Recipe />
          <Cooker />
          <MoreRecipe />
          <FoodieLandInstagram />
          <SubscribeCard />
        </div>
      </UserLayout>
    </>
  );
}

export default Home;
