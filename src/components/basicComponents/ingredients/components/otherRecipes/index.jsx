import OtherRecipeCard from "./otherRecipeCard";

function OtherRecipes({ RecipeData, number, title }) {
  return (
    <div className="basis-[100%] lg:basis-[33%]">
      <div className="mb-10">
        <h2 className="font-semibold text-3xl md:text-4xl">{title}</h2>
      </div>
      <div>
        {RecipeData.slice(0, number).map(({ id, img, title, chef }) => (
          <OtherRecipeCard key={id} img={img} title={title} chef={chef} />
        ))}
      </div>

      <div className="relative hidden lg:block bg-green-900 mt-20 bg-contain bg-no-repeat">
        <p className="font-lobster text-2xl text-white absolute top-10 left-[100px] w-1/2 text-center">
          Don’t forget to eat healthy food
        </p>
        <img src="./images/Star-1.png" alt="star" />
        <img
          src="./images/recipes/food-21.png"
          alt="chicken"
          className="absolute top-20 left-8 z-10"
        />
        <span className="text-gray-400 text-center text-sm absolute bottom-6 left-[140px]">
          www.foodieland.com
        </span>
      </div>
    </div>
  );
}

export default OtherRecipes;
