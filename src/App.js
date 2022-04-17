import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";
import Cooker from "./components/BasicComponents/cooker";


function App() {
  return (
    <div className="App">
      <Carousel />
      <Recipe />
      <Cooker />
    </div>
  )
}

export default App;
