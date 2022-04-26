import React from "react";
import ContactSection from "../../BasicComponents/contact";
import SubscribeCard from "../../BasicComponents/subscribeCard";
import RecoommendedRecipes from "../../BasicComponents/recommendedRecipes/index";


const Contact = () => {
  return (
    <>
      <ContactSection />
      <SubscribeCard />
      <RecommendedRecipes
        title={"Check out the delicious recipe "}
        length={4}
      />
    </>
  );
};

export default Contact;
