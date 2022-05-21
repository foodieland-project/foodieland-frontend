import MoreRecipeCard from "../moreRecipe/components/moreRecipeCard";
import { useSelector } from "react-redux";
function RecommendedRecipes({ title, length }) {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <section className="container font-inter flex flex-col py-2  mx-auto my-10 md:my-20">
      <div className="text-center mb-16">
        <h2 className="font-semibold text-3xl sm:text-4xl">{title}</h2>
      </div>
      <div className="flex gap-6 justify-center items-center w-full flex-wrap">
        {recipes
          .slice(0, length)
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
    </section>
  );
}

export default RecommendedRecipes;
