import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";
import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe";
import Categories from "./components/BasicComponents/Categories/Categories";
import Header from "./components/BasicComponents/header"
import Footer from "./components/BasicComponents/footer";

function App() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Header />
        <Carousel />
        <Categories />
        <Recipe />
        <Cooker />
        <MoreRecipe />
        <Footer />
      </div>
    </>

  );
}

export default App;
