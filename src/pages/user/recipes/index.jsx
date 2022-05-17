import Directions from "../../../components/directions";
import RecipeDetails from "../../../components/recipeDetails";
import Ingredients from "../../../components/ingredients";
import RecommendedRecipes from "../../../components/recommendedRecipes";
import SubscribeCard from "../../../components/subscribeCard";
import UserLayout from "../../../layouts/userLayout";

const Recipes = () => {
  return (
    <div>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <RecipeDetails />
          <Ingredients />
          <Directions />
          <SubscribeCard />
          <RecommendedRecipes
            title={"You may like these recipes too "}
            length={4}
          />
        </div>
      </UserLayout>
    </div>
  );
};

export default Recipes;
