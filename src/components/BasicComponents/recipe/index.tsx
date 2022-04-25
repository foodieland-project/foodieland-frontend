import React from 'react'
import BannerCard from './components/bannerCard'
import RecipeCard from './components/recipeCard'




const Recipe = () => {

    const RecipeData = [
        {
            id:1,
            category: "product",
            title: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'images/recipes/food-13.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:2,
            category: "product",
            title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
            img: 'images/recipes/food-14.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:3,
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-15.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:4,
            category: "product",
            title: 'Fresh and Healthy Mixed Mayonnaise Salad',
            img: 'images/recipes/food-16.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:5,
            category: "product",
            title: 'Chicken Meatballs with Cream Cheese',
            img: 'images/recipes/food-17.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:6,
            category: "banner",
            title: 'Don’t forget to eat healthy food',
            img: 'images/Star-1.png',
            chef:"Andreas Paula"
        },
        {
            id:7,
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-18.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:8,
            category: "product",
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'images/recipes/food-19.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
        {
            id:9,
            category: "product",
            title: 'The Creamiest Creamy Chicken and Bacon Pasta',
            img: 'images/recipes/food-20.png',
            Meal: 'Breakfast',
            time: '30 Minutes',
            liked: false,
            chef:"Andreas Paula"
        },
    ]
    return (
        <div className='flex flex-col justify-center mb-28 xl:mb-[240px]'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-center text-5xl mb-[24px]'>Simple and tasty recipes</h2>
                <p className=' font-normal text-center text-base mb-[96px] sm:mb-[80px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
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