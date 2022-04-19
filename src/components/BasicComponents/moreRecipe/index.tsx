import React from 'react';
import MoreRecipeCard from './components/moreRecipeCard';

const MoreRecipe = () => {

    const MoreRecipeData = [
        {
            category: "product",
            id: 1,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
            img: 'images/delicious-recipe/food-1.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 2,
            title: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'images/delicious-recipe/food-2.png',
            Meal: 'Western',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 3,
            title: 'Healthy Japanese Fried Rice with Asparagus',
            img: 'images/delicious-recipe/food-3.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 4,
            title: 'Cauliflower Walnut Vegetarian Taco Meet',
            img: 'images/delicious-recipe/food-4.png',
            Meal: 'Eastern',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 5,
            title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
            img: 'images/delicious-recipe/food-5.png',
            Meal: 'Healthy',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 6,
            title: 'Barbeque Spicy Sandwiches with Chips',
            img: 'images/delicious-recipe/food-6.png',
            Meal: 'Snack',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 7,
            title: 'FireCracker Vegan Lettuce Wraps-Spicy!',
            img: 'images/delicious-recipe/food-7.png',
            Meal: 'Seafood',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            id: 8,
            title: 'Chicken Ramen soup with Mushroom',
            img: 'images/recipes/food-20.png',
            Meal: 'Japanese',
            time: '30 Minutes',
            liked: false,
        },
    ]
    return (
        <div className='container w-[1280px] h-[868px] flex flex-col py-2  mx-auto  my-20'>
            <div className='my-8 flex items-center justify-between xl:flex-row xl:text-left lg:flex-col lg:text-center md:flex-col md:text-center sm:text-center sm:flex-col'>
                <div className='xl:w-[507px] h-[116px] lg:w-full md:w-full sm:w-full'>
                    <h1 className='font-semibold text-5xl mb-2 leading-[58px] tracking-[-0.04em] text-black'>Try this delicious recipe to make your day</h1>
                </div>
                <div className='xl:w-[620px] h-[56px] lg:w-full md:w-full sm:w-full'>
                    <p className='text-xs font-normal leading-7 text-[rgba(0,0,0,0.6)]'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center w-full flex-wrap'>
                {
                    MoreRecipeData.map((data, id) => <MoreRecipeCard key={id} recipeData={data} />)
                }
            </div>


        </div>
    )
}

export default MoreRecipe;