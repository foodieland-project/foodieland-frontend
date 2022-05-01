import React, { useState } from 'react';
import { icons } from "../../../../pages/user/utils/icons"


const MoreRecipeCard = ({ recipeData }: any) => {

    const [like, setLike] = useState(true);
    const { img, title, Meal, time } = recipeData;

    return (
        <div className='flex flex-col basis-[85%] sm:basis-[40%] lg:basis-[30%] xl:basis-[23%] h-[300px] pb-8  rounded-3xl relative'>
            {/* <div className='flex flex-col w-[290px] h-[316px]  justify-center rounded-3xl relative'> */}
            <div className='h-[200px] rounded-3xl w-full'>
                <img src={img} alt="product" className=' block w-full h-full rounded-3xl object-fit' />
            </div>
            <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[12px] right-[16px] '>
                <span onClick={() => setLike((prev) => !prev)} className="w-[20.25px] h-[18px] inline-block cursor-pointer">
                    {
                        like ? icons.whiteHeat() : icons.redHeat()
                    }

                </span>
            </div>
            <div>
                <h2 className='text-lg font-semibold mt-1 tracking-[-0.04em] leading-[26px] text-black'>{title}</h2>
            </div>
            <div className='flex items-center absolute bottom-2 mt-3 font-medium text-sm leading-[17px] tracking-[-0.02em] text-[rgba(0,0,0,0.6)]'>
                <div className='flex items-center mr-3'><span className='inline-block pr-2'>{icons.timer()}</span>{time}</div>
                <div className='flex items-center'><span className='inline-block '>{icons.fork()}</span><span className='inline-block pr-2'>{icons.knife()}</span>{Meal}</div>
            </div>

        </div>
    )
}

export default MoreRecipeCard;