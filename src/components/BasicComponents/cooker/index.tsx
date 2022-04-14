import React from 'react'

function Cooker() {
    const images = [
        'images/cookie/food-13.png',
    ]



    return (
        <div className='m-[80px] flex flex-row justify-around'>
            <div className="flex flex-col justify-center" >
                <p className="font-inter font-semibold text-5xl w-[526px] tracking-tighter mb-[24px]" >Everyone can be a chef in their own kitchen</p>
                <p className="font-inter font-normal text-base w-[508px] mb-[72px]" >Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <button className="flex justify-center items-center w-[180px] h-[60px] bg-black text-white rounded-2xl" >Learn More</button>
            </div>
            <div className='w-[651px] h-[500px] bg-gradient-to-b from-white to-blue-50 relative rounded-3xl'>
                <img className="" src="" alt="" />
                <img className="absolute bottom-0 right-[60px]" src="images/cooker/image-220.png" alt="" />
                <img className="absolute top-[326px] right-[626px]" src="images/cooker/image-27.png" alt="" />
                <img className="absolute top-[70px] right-[36px]" src="images/cooker/image-20.png" alt="" />
                <img className="absolute right-[510px]" src="images/cooker/image-21.png" alt="" />
                <img className="absolute  right-[181px]" src="images/cooker/image-28.png" alt="" />
            </div>
        </div>
    )
}

export default Cooker