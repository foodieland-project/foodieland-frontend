import React from 'react'
import { icons } from '../../../utils/icons'

const Footer = () => {
    return (
        <div>
            <div className='flex lg:flex-row 2sm:flex-col lg:justify-between mb-[75px] mt-[191px]'>
                <div className='flex flex-col lg:items-start 2sm:items-center'>
                    <p className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[0px] 2sm:mb-[40px]">Foodieland.</p>
                    <p className='flex justify-start 2sm:mb-[40px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>
                <ul className="flex md:flex-row justify-center items-center font-medium font-inter sm:right-[120px]">
                    <li className="flex lg:ml-[60px] lg:py-[0px] 2sm:ml-[0px] 2sm:py-[20px] lg:w-auto 2sm:w-[250px] justify-center">Recipes</li>
                    <li className="flex lg:ml-[60px] lg:py-[0px] 2sm:ml-[0px] 2sm:py-[20px] lg:w-auto 2sm:w-[250px] justify-center">Blog</li>
                    <li className="flex lg:ml-[60px] lg:py-[0px] 2sm:ml-[0px] 2sm:py-[20px] lg:w-auto 2sm:w-[250px] justify-center">Contact</li>
                    <li className="flex lg:ml-[60px] lg:py-[0px] 2sm:ml-[0px] 2sm:py-[20px] lg:w-auto 2sm:w-[250px] justify-center">About us</li>
                </ul>
            </div>
            <div className='flex md:flex-row 2sm:flex-col 2sm:justify-center 2sm:mb-[10px] h-[190px] justify-between items-center border-t-[1px] border-gray-300'>
                <p className='flex items-center justify-center lg:mb-0 font-eudoxus font-normal text-lg mx-auto 2sm:mb-[40px]'>© 2020 Flowbase. Powered by <span className='text-red-300'>Webflow</span> </p>
                <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px] 2sm:mb-[40px]">
                    <span className="flex justify-center">{icons.instagram()}</span>
                    <span className="flex justify-center ml-[40px]">{icons.twitter()}</span>
                    <span className="flex justify-center ml-[40px]">{icons.facebook()}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer