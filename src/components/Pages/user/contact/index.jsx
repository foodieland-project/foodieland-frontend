import React from 'react'
import ContactSection from '../../../BasicComponents/contact';
import SubscribeCard from '../../../BasicComponents/subscribeCard';
import RecommendedRecipesData from "../../../BasicComponents/recommendedRecipes";
import UserLayout from '../../../layout/userLayout';

const Contact = () => {
  return (
    <>
      <UserLayout>
        <div className="w-11/12 sm:container mx-auto">
          <ContactSection />
          <SubscribeCard />
          <RecommendedRecipesData />
        </div>
      </UserLayout>
    </>
  )
}

export default Contact