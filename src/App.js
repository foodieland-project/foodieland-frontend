import React from "react";
import Carousel from "./components/BasicComponents/carousel/";
import Recipe from "./components/BasicComponents/recipe";
import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe";
import SubscribeCard from "./components/BasicComponents/subscribeCard";
import Categories from "./components/BasicComponents/categories";
import FoodielandInstagram from "./components/BasicComponents/instagram";
import Header from "./components/BasicComponents/header";
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
        <FoodielandInstagram />
        <SubscribeCard />
        <Footer />
      </div>
    </>
  );
}

export default App;
