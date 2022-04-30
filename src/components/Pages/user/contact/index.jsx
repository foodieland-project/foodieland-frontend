import React from 'react'
import ContactSection from '../../../basicComponents/contact';
import SubscribeCard from '../../../basicComponents/subscribeCard';
import RecommendedRecipesData from "../../../basicComponents/recommendedRecipes";
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