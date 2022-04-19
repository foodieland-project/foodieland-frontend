import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";
import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe";
import SubscribeCard from "./components/BasicComponents/subscribeCard"
import Categories from "./components/BasicComponents/Categories/Categories";
import Header from "./components/BasicComponents/header"

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <Carousel />
      <Categories />
      <Recipe />
      <Cooker />
      <MoreRecipe />
      <SubscribeCard/>
    </div>
  );
}

export default App;
