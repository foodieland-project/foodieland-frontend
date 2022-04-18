import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";

import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe";
import SubscribeCard from "./components/BasicComponents/subscribeCard"

function App() {
  return (
    <div>
      <Carousel />
      <Recipe />
      <Cooker />
      <MoreRecipe />
      <SubscribeCard/>
    </div>
  );
}

export default App;
