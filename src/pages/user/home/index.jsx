import { useState } from "react";
import Carousel from "../../../components/carousel";
import Recipe from "../../../components/recipe";
import Cooker from "../../../components/cooker";
import MoreRecipe from "../../../components/moreRecipe";
import SubscribeCard from "../../../components/subscribeCard";
import Categories from "../../../components/categories";
import FoodieLandInstagram from "../../../components/instagram";
import UserLayout from "../../../layouts/userLayout";
import { useEffect } from "react";
import axios from "axios";
import { recipeData } from "../../../services/utils/data";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../../features/recipe/recipeSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://foodieland-3b1ed-default-rtdb.firebaseio.com/recipes.json",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data["-N2XVCZbEyWG1eQnVrFV"]);
      dispatch(fetchRecipes(data["-N2XVCZbEyWG1eQnVrFV"]));
    }
    fetchData();
  }, []);
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
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
