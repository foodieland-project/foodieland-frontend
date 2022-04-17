import React,{useState} from 'react';
import {icons} from "../../../../../utils/icons.js"


const MoreRecipeCard=({recipeData}:any)=> {

    const [like, setLike] = useState(true);
    const{img,title,Meal,time}=recipeData;

  return (
    <div className='flex flex-col lg:w-[24%] h-[316px] md:w-[46%] sm:w-[100%] sm:justify-center my-2 rounded-3xl relative'>
        <div className='h-[200px] rounded-3xl'>
            <img src={img} alt="product" className=' block w-full h-full rounded-3xl'/>
        </div>
        <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[16px] right-[16px] '>
                <span onClick={() => setLike((prev) => !prev)} className="w-[20.25px] h-[18px] inline-block cursor-pointer">
                    {
                        like ? icons.whiteHeat() : icons.redHeat()
                    }

                </span>
        </div>
        <div>
            <h2 className='text-lg font-medium mt-1'>{title}</h2>
        </div>
        <div className='flex items-center mt-3 font-light text-slate-500'>
            <div className='flex items-center mr-3'><span className='inline-block pr-2'>{icons.timer()}</span>{time}</div>
            <div><span className='inline-block '>{icons.fork()}</span><span className='inline-block pr-2'>{icons.knife()}</span>{Meal}</div>
        </div>

    </div>
  )
}

export default MoreRecipeCard;