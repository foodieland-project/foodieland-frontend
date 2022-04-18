import React from 'react'
import { icons } from 'utils/icons'

const Header = () => {
    return (
        <div className="flex justify-between flex-row-reverse mx-[80px] py-[46px] border-b-1">
            <div className="flex  items-center md:flex-row text-[19.36px]">
                <span className="flex justify-center">{icons.instagram()}</span>
                <span className="flex justify-center ml-[40px]">{icons.twitter()}</span>
                <span className="flex justify-center ml-[40px]">{icons.facebook()}</span>
            </div>
            <ul className="flex lg:flex-row md:flex-col sm:flex-col 2sm:flex-col md:mt-100px sm:mt-100px 2sm:mt-100px items-center font-medium font-inter">
                <li className="flex lg:ml-[60px] md:ml-[0px] sm:ml-[0px] 2sm:ml-[0px]">Home</li>
                <li className="flex lg:ml-[60px] md:ml-[0px] sm:ml-[0px] 2sm:ml-[0px]">Recipes</li>
                <li className="flex lg:ml-[60px] md:ml-[0px] sm:ml-[0px] 2sm:ml-[0px]">Blog</li>
                <li className="flex lg:ml-[60px] md:ml-[0px] sm:ml-[0px] 2sm:ml-[0px]">Contact</li>
                <li className="flex lg:ml-[60px] md:ml-[0px] sm:ml-[0px] 2sm:ml-[0px]">About us</li>
            </ul>
            <p className="flex flex-row items-center font-lobster font-normal text-[24px]">Foodieland.</p>
        </div>
    )
}

export default Header