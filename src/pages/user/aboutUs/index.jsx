import SubscribeCard from "../../../components/subscribeCard";
import RecommendedRecipes from "../../../components/recommendedRecipes";
import Chefs from "../../../components/chefs";
import AboutUsInfo from "../../../components/aboutUsInfo";
import UserLayout from "../../../layouts/userLayout";

const Post = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <AboutUsInfo />
          <Chefs />
          <SubscribeCard />
          <RecommendedRecipes
            title={"You may like these recipes too "}
            length={4}
          />
        </div>
      </UserLayout>
    </>
  );
};

export default Post;
