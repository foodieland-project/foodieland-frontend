import React from "react";
import Carousel from "../../BasicComponents/carousel";
import Recipe from "../../BasicComponents/recipe";
import Cooker from "../../BasicComponents/cooker";
import MoreRecipe from "../../BasicComponents/moreRecipe";
import SubscribeCard from "../../BasicComponents/subscribeCard";
import Categories from "../../BasicComponents/categories";
import FoodieLandInstagram from "../../BasicComponents/instagram";

function Home() {
  return (
    <>
      <Carousel />
      <Categories />
      <Recipe />
      <Cooker />
      <MoreRecipe />
      <FoodieLandInstagram />
      <SubscribeCard />
    </>
  );
}

export default Home;
