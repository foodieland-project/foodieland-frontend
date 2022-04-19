import React,{useState} from 'react';
import {icons} from "../../../../../utils/icons.js"


const MoreRecipeCard=({recipeData}:any)=> {

    const [like, setLike] = useState(true);
    const{img,title,Meal,time}=recipeData;

  return (
    <div className='flex flex-col xl:w-[290px] h-[316px] lg:w-[32%] md:w-[46%] sm:w-[100%] sm:justify-center my-2 rounded-3xl relative'>
        <div className='h-[200px] rounded-3xl w-full mb-3'>
            <img src={img} alt="product" className=' block w-full h-full rounded-3xl object-fit'/>
        </div>
        <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[32px] right-[36px] '>
                <span onClick={() => setLike((prev) => !prev)} className="w-[20.25px] h-[18px] inline-block cursor-pointer">
                    {
                        like ? icons.whiteHeat() : icons.redHeat()
                    }

                </span>
        </div>
        <div>
            <h2 className='text-lg font-semibold mt-1 tracking-[-0.04em] leading-[26px] text-black'>{title}</h2>
        </div>
        <div className='flex items-center mt-3 font-medium text-sm leading-[17px] tracking-[-0.02em] text-[rgba(0,0,0,0.6)]'>
            <div className='flex items-center mr-3'><span className='inline-block pr-2'>{icons.timer()}</span>{time}</div>
            <div><span className='inline-block '>{icons.fork()}</span><span className='inline-block pr-2'>{icons.knife()}</span>{Meal}</div>
        </div>

    </div>
  )
}

export default MoreRecipeCard;