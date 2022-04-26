import MoreRecipeCard from "../moreRecipe/components/moreRecipeCard";
function RecommendedRecipes() {
  const recommendedRecipesData = [
    {
      category: "product",
      id: 1,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      img: "/images/delicious-recipe/food-1.png",
      Meal: "Healthy",
      time: "30 Minutes",
      liked: false,
    },
    {
      category: "product",
      id: 2,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      img: "/images/delicious-recipe/food-2.png",
      Meal: "Western",
      time: "30 Minutes",
      liked: false,
    },
    {
      category: "product",
      id: 3,
      title: "Healthy Japanese Fried Rice with Asparagus",
      img: "/images/delicious-recipe/food-3.png",
      Meal: "Healthy",
      time: "30 Minutes",
      liked: false,
    },
    {
      category: "product",
      id: 4,
      title: "Cauliflower Walnut Vegetarian Taco Meet",
      img: "/images/delicious-recipe/food-4.png",
      Meal: "Eastern",
      time: "30 Minutes",
      liked: false,
    },
  ];
  return (
    <section className="container font-inter flex flex-col py-2  mx-auto my-10 md:my-20">
      <div className="text-center mb-16">
        <h2 className="font-semibold text-3xl sm:text-4xl">
          You may like these recipes too
        </h2>
      </div>
      <div className="flex gap-6 justify-center items-center w-full flex-wrap">
        {recommendedRecipesData.slice(0, 4).map((data) => (
          <MoreRecipeCard key={data.id} recipeData={data} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedRecipes;
