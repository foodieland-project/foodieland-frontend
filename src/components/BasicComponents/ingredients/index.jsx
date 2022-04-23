import IngredientCard from "./components/ingredientCard";
import OtherRecipes from "./components/otherRecipes";
import "./ingredients.css";

function Ingredients() {
  const ingredientsData = [
    {
      id: 1,
      text: " Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      text: " Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      text: " Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      text: " Lorem ipsum dolor sit amet",
    },
  ];
  const RecipeData = [
    {
      id: 1,
      category: "product",
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      img: "images/recipes/food-13.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 2,
      category: "product",
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      img: "images/recipes/food-14.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 3,
      category: "product",
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      img: "images/recipes/food-15.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 4,
      category: "product",
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      img: "images/recipes/food-16.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 5,
      category: "product",
      title: "Chicken Meatballs with Cream Cheese",
      img: "images/recipes/food-17.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 6,
      category: "banner",
      title: "Don’t forget to eat healthy food",
      img: "images/Star-1.png",
      chef: "Andreas Paula",
    },
    {
      id: 7,
      category: "product",
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      img: "images/recipes/food-18.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 8,
      category: "product",
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      img: "images/recipes/food-19.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
    {
      id: 9,
      category: "product",
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      img: "images/recipes/food-20.png",
      Meal: "Breakfast",
      time: "30 Minutes",
      liked: false,
      chef: "Andreas Paula",
    },
  ];

  return (
    <section>
      <div className="w-11/12 xl:w-full mx-auto flex flex-wrap lg:flex-nowrap gap-10 font-inter my-10 lg:my-20">
        <div className="basis-[100%] lg:basis-[66%]">
          <div className="mb-14">
            <h2 className="font-semibold text-3xl md:text-4xl">Ingredients</h2>
          </div>
          <div className=" mb-14">
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              For main dish
            </h2>
            {ingredientsData.map(({ id, text }) => (
              <IngredientCard key={id} id={id} text={text} />
            ))}
          </div>
          <div className="mb-14">
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              For the sauce
            </h2>
            {ingredientsData.map(({ id, text }) => (
              <IngredientCard key={id} id={id} text={text} />
            ))}
          </div>
        </div>
        <div className="basis-[100%] lg:basis-[33%]">
          <div className="mb-10">
            <h2 className="font-semibold text-3xl md:text-4xl">
              Other Recipes
            </h2>
          </div>
          <div>
            {RecipeData.slice(0, 3).map(({ id, img, title, chef }) => (
              <OtherRecipes key={id} img={img} title={title} chef={chef} />
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
      </div>
    </section>
  );
}

export default Ingredients;
