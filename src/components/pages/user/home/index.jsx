import React from "react";
import Carousel from "../../../basicComponents/carousel";
import Recipe from "../../../basicComponents/recipe";
import Cooker from "../../../basicComponents/cooker";
import MoreRecipe from "../../../basicComponents/moreRecipe";
import SubscribeCard from "../../../basicComponents/subscribeCard";
import Categories from "../../../basicComponents/categories";
import FoodieLandInstagram from "../../../basicComponents/instagram";
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
