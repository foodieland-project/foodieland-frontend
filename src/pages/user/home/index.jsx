import Carousel from "../../../components/carousel";
import Recipe from "../../../components/recipe";
import Cooker from "../../../components/cooker";
import MoreRecipe from "../../../components/moreRecipe";
import SubscribeCard from "../../../components/subscribeCard";
import Categories from "../../../components/categories";
import FoodieLandInstagram from "../../../components/instagram";
import UserLayout from "../../../layouts/userLayout";

function Home() {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <Carousel />
          <Categories />
          <Recipe />
          <Cooker />
          <MoreRecipe />
          <FoodieLandInstagram />
          <SubscribeCard />
        </div>
      </UserLayout>
    </>
  );
}

export default Home;
