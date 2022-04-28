import React from 'react'
import { icons } from '../../../../../utils/icons';

type propsType = {
    title: string,
    image: string,
}

const RecipeCard = ({ title, image }: propsType) => {

    const [like, setLike] = React.useState(true);
    return (
        <div className='w-[400px] h-[434px] flex flex-col justify-start items-center
    bg-gradient-to-b from-white to-blue-50 rounded-3xl p-[16px] font-inter relative'>
            <img className='w-[368px] h-[250px] rounded-3xl mb-6' src={image} alt="" />
            <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[32px] right-[36px]'>
                <span onClick={() => setLike((prev) => !prev)} className="w-[20.25px] h-[18px]">
                    {
                        like ? icons.whiteHeat() : icons.redHeat()
                    }
                </span>
            </div>
            <p className="font-semibold text-2xl mb-6">{title}</p>
            <div className='flex justify-start w-full'>
                <div className='flex flex-row-reverse pr-7'>
                    <p className='font-medium text-sm'>
                        30 Minutes
                    </p>
                    <span className="w-[18px] h-[18px] mr-3">
                        {icons.timer()}
                    </span>
                </div>
                <div className='flex flex-row-reverse'>
                    <p className='font-medium text-sm'>Breakfast</p>
                    <span className='w-[18px] h-[18px] flex flex-row mr-3'>
                        {icons.fork()}
                        {icons.knife()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard