import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../blog/pagination";
import MoreRecipeCard from "../moreRecipe/components/moreRecipeCard";
function RecipeList() {
  const recipesList = useSelector((state) => state.recipes.recipes);
  const [recipes, setRecipes] = useState(recipesList);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(8);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="mt-16 mb-32">
      <div className="mb-14">
        <h2 className="font-semibold text-center text-4xl lg:text-5xl mb-[24px]">
          Simple and tasty recipes
        </h2>
      </div>
      <div className="flex gap-6 justify-center w-[70%] mx-auto xl:justify-between items-center md:w-full flex-wrap">
        {currentRecipes
          .slice(0, 12)
          .map(({ img, title, category, id, cook_time }) => (
            <MoreRecipeCard
              key={id}
              id={id}
              img={img}
              title={title}
              category={category}
              cookTime={cook_time}
            />
          ))}
      </div>
      <div className="w-auto">
        <Pagination
          postPerPage={recipesPerPage}
          totalPosts={recipes.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default RecipeList;
