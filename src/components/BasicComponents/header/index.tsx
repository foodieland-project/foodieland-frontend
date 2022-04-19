import React, { useState } from 'react'
import { icons } from 'utils/icons'

const Header = () => {
    const [open, setOpen] = useState(false)

    const manu = [
        {
            name: 'Home',
        },
        {
            name: 'Recipes',
        },
        {
            name: 'Blog',
        },
        {
            name: 'Contact',
        },
        {
            name: 'About us',
        },
    ]


    return (
        <div className="flex mx-[80px] py-[46px] lg:justify-between sm:flex-row-reverse 2sm:flex-col sm:justify-between sm:items-center">
            <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px] 2sm:mb-[40px]">
                <span className="flex justify-center">{icons.instagram()}</span>
                <span className="flex justify-center ml-[40px]">{icons.twitter()}</span>
                <span className="flex justify-center ml-[40px]">{icons.facebook()}</span>
            </div>
            <div className=" lg:order-[0] sm:order-[-1] 2sm:order-[1] 2sm:relative 2sm:items-center">
                <ul onClick={() => setOpen(prev => prev == true ? false : true)} className={`cursor-pointer items-center lg:hidden 2sm:flex 2sm:flex-col ${open ? "h-[36px]" : ""}`}>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all	 ${open ? "2sm:rotate-45 2sm:absolute" : ""}`}></li>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1  transition-all ${open ? "2sm:rotate-135" : ""}`}></li>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all ${open ? "2sm:hidden rotate-90" : ""}`}></li>
                </ul>
                <ul className={`justify-center items-center font-medium font-inter lg:flex lg:flex-row lg:bg-transparent lg:mt-[0px] lg:mr-[0px]
                 sm:right-[120px] lg:right-auto lg:translate-x-0 2sm:right-[50%] translate-x-[50%] 2sm:text-black 2sm:flex-col 2sm:none lg:relative
                  2sm:z-30 2sm:absolute 2sm:mt-[20px] 2sm:bg-yellow-50 2sm:rounded-md ${open || "2sm:hidden"}`}>
                    {
                        manu.map(({ name }) => {
                            return (
                                <li className="flex lg:ml-[60px] lg:py-[0px] 2sm:ml-[0px] 2sm:py-[20px] lg:w-auto 2sm:w-[250px] justify-center">{name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <p className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[0px] 2sm:mb-[40px]">Foodieland.</p>
        </div>
    )
}

export default Header