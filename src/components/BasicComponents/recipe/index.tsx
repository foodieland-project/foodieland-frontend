import React from 'react'
import BannerCard from './components/bannerCard'
import RecipeCard from './components/recipeCard'




const Recipe = () => {

    const RecipeData = [
        {
            category: "product",
            title: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'images/recipes/food-13.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
            img: 'images/recipes/food-14.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-15.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'Fresh and Healthy Mixed Mayonnaise Salad',
            img: 'images/recipes/food-16.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'Chicken Meatballs with Cream Cheese',
            img: 'images/recipes/food-17.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "banner",
            title: 'Don’t forget to eat healthy food',
            img: 'images/recipes/food-20.png',
        },
        {
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-18.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-19.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
        {
            category: "product",
            title: 'The Creamiest Creamy Chicken and Bacon Pasta',
            img: 'images/recipes/food-20.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
        },
    ]
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-5xl mb-[24px]'>Simple and tasty recipes</h2>
                <p className=' font-normal text-base mb-[96px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='flex flex-row flex-wrap mx-[80px] lg:justify-start md:justify-center '>
                {
                    RecipeData.map(({ title, img, category }, index) => (
                        category === "product" ?
                            <RecipeCard key={index} title={title} image={img} />
                            :
                            <BannerCard key={index} title={title} image={img} />
                    ))
                }
            </div>
        </div>

    )
}

export default Recipe   