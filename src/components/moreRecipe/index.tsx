import React from 'react';
import MoreRecipeCard from './components/moreRecipeCard';
import { MoreRecipeData} from '../../services/utils/data'
const MoreRecipe = () => {
    return (
        <div className=' font-inter flex flex-col py-2  mx-auto my-10 md:my-20'>
            <div className='my-8 px-4 xl:px-0 flex flex-col items-center justify-between xl:flex-row xl:text-left lg:flex-col lg:text-center md:flex-col text-center sm:flex-col'>
                <div className='xl:w-[507px] md:w-11/12 w-full md:mb-2 xl:mb-0'>
                    <h1 className='font-semibold text-4xl md:text-5xl mb-2 leading-[58px] tracking-[-0.04em] text-black'>Try this delicious recipe to make your day</h1>
                </div>
                <div className='xl:w-[620px] lg:w-full  w-[90%]'>
                    <p className='text-xs lg:text-base font-normal leading-7 text-[rgba(0,0,0,0.6)]'>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                </div>
            </div>
            <div className='flex gap-6 justify-center w-[70%] mx-auto xl:justify-between items-center md:w-full flex-wrap'>
                {
                    MoreRecipeData.map((data, id) => <MoreRecipeCard key={data.id} recipeData={data} />)
                }
            </div>


        </div>
    )
}

export default MoreRecipe;