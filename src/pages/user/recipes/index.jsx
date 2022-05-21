import RecipeList from "../../../components/recipeList";
import RecommendedRecipes from "../../../components/recommendedRecipes";
import SubscribeCard from "../../../components/subscribeCard";
import UserLayout from "../../../layouts/userLayout";

const Recipes = () => {
  return (
    <div>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <RecipeList />
          <SubscribeCard />
        </div>
      </UserLayout>
    </div>
  );
};

export default Recipes;
