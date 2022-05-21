import Directions from "../../../components/directions";
import Ingredients from "../../../components/ingredients";
import RecipeDetails from "../../../components/recipeDetails";
import RecommendedRecipes from "../../../components/recommendedRecipes";
import SubscribeCard from "../../../components/subscribeCard";
import UserLayout from "../../../layouts/userLayout";

function Recipe() {
  return (
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
  );
}

export default Recipe;
