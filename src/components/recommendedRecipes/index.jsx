import MoreRecipeCard from "../moreRecipe/components/moreRecipeCard";
import { MoreRecipeData } from "../../../utils/data";
function RecommendedRecipes({ title, length }) {
  return (
    <section className="container font-inter flex flex-col py-2  mx-auto my-10 md:my-20">
      <div className="text-center mb-16">
        <h2 className="font-semibold text-3xl sm:text-4xl">{title}</h2>
      </div>
      <div className="flex gap-6 justify-center items-center w-full flex-wrap">
        {MoreRecipeData.slice(0, length).map((data) => (
          <MoreRecipeCard key={data.id} recipeData={data} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedRecipes;
