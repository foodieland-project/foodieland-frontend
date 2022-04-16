import React from 'react';
import MoreRecipeCard from './MoreRecipeCard';

const MoreRecipe = ()=> {

    const MoreRecipeData = [
        {
            category: "product",
            id:1,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
            img: 'images/delicious-recipe/food-1.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:2,
            title: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'images/delicious-recipe/food-2.png',
            Meal: 'Western',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:3,
            title: 'Healthy Japanese Fried Rice with Asparagus',
            img: 'images/delicious-recipe/food-3.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:4,
            title: 'Cauliflower Walnut Vegetarian Taco Meet',
            img: 'images/delicious-recipe/food-4.png',
            Meal: 'Eastern',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:5,
            title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
            img: 'images/delicious-recipe/food-5.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:6,
            title: 'Barbeque Spicy Sandwiches with Chips',
            img: 'images/delicious-recipe/food-6.png',
            Meal: 'Snack',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:7,
            title: 'FireCracker Vegan Lettuce Wraps-Spicy!',
            img:'images/delicious-recipe/food-7.png',
            Meal: 'Seafood',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id:8,
            title: 'Chicken Ramen soup with Mushroom',
            img: 'images/recipes/food-20.png',
            Meal: 'Japanese',
            time: '30 Minutes',
            liked: false,
        },
    ]
  return (
    <div className='container mx-auto flex flex-col py-2 px-2'>
        <div className='my-8 flex items-center justify-between'>
             <div className='w-[620px]'>
                 <h1 className='font-bold text-4xl mb-2'>Try this delicious recipe to make your day</h1>
             </div>
             <div className='w-[507px]'>
                 <p className='text-sm text-slate-500'>
                     Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
                 </p>
             </div>
        </div>
        <div className='flex justify-between items-center w-full flex-wrap'>
             {
           MoreRecipeData.map((data,id)=><MoreRecipeCard key={id} recipeData={data}/>) 
        }
        </div>
       
        
    </div>
  )
}

export default MoreRecipe;