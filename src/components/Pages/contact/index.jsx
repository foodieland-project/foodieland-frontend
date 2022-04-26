import React from "react";
import ContactSection from "../../BasicComponents/contact/index";
import SubscribeCard from "../../BasicComponents/subscribeCard/index";
import RecommendedRecipes from "../../BasicComponents/recommendedRecipes/index";

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
