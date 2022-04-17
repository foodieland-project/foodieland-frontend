import React from 'react'

function Cooker() {
    const images = [
        'images/cookie/food-13.png',
    ]



    return (
        <div className='flex lg:justify-around xl:flex-row 2sm:flex-col md:justify-center 2sm:justify-center md:items-center'>
            <div className="flex flex-col mb-24 md:mb-40 justify-center items-center" >
                <p className="font-inter font-semibold text-4xl md:text-5xl w-auto xl:w-[526px]  tracking-tighter mb-[24px] text-center xl:text-left" >Everyone can be a chef in their own kitchen</p>
                <p className="font-inter font-normal text-base w-auto md:w-[526px] mb-[72px] text-center xl:text-left" >Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className="flex justify-center items-center w-36 md:w-[180px] h-12 md:h-[60px] bg-black text-white rounded-2xl" >Learn More</button>
            </div>
            <div className='w-auto md:w-[651px] h-[500px] bg-gradient-to-b from-white to-blue-50 relative rounded-3xl'>
                <img className="absolute object-contain bottom-0  h-[597px] W-[660px]" src="images/cooker/image-220.png" alt="" />
                <img className="absolute w-10 sm:w-12 top-80 md:right-[626px]" src="images/cooker/image-27.png" alt="" />
                <img className="absolute w-16 sm:w-20 top-[70px] right-[36px]" src="images/cooker/image-20.png" alt="" />
                <img className="absolute w-20 sm:w-24 left-10 md:right-[510px]" src="images/cooker/image-21.png" alt="" />
                <img className="absolute w-11 md:w-16 right-28 sm:right-36 md:right-[180px]" src="images/cooker/image-28.png" alt="" />
            </div>
        </div>
    )
}

export default Cooker