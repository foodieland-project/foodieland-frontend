import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";

import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe";
import Categories from "./components/BasicComponents/Categories/Categories";
import FoodielandInstagram from "./components/BasicComponents/Instagram/FoodielandInstagram";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Carousel />
      <Categories />
      <Recipe />
      <Cooker />
      <FoodielandInstagram />
      <MoreRecipe />
    </div>
  );
}

export default App;
