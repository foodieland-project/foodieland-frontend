import ContactSection from "../../../components/contact";
import SubscribeCard from "../../../components/subscribeCard";
import RecommendedRecipesData from "../../../components/recommendedRecipes";
import UserLayout from "../../../layouts/userLayout";

const Contact = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto sm:px-4">
          <ContactSection />
          <SubscribeCard />
          <RecommendedRecipesData />
        </div>
      </UserLayout>
    </>
  );
};

export default Contact;
