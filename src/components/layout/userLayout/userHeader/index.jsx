import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import { icons } from '../../../Pages/user/utils/icons';

const UserHeader = () => {
    const [open, setOpen] = useState(false)

    const manu = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Recipes',
            to: '/recipes'
        },
        {
            name: 'Blog',
            to: '/blog'
        },
        {
            name: 'Contact',
            to: '/contact'
        },
        {
            name: 'About Us',
            to: '/aboutUs'
        },
    ]


    return (
        <div className="flex py-[46px] lg:justify-between sm:flex-row-reverse  flex-col sm:justify-between sm:items-center border-b-[1px] border-gray-300  mx-[80px] ">
            <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px]  mb-[40px]">
                <span className="flex justify-center">{icons.instagram()}</span>
                <span className="flex justify-center ml-[40px]">{icons.twitter()}</span>
                <span className="flex justify-center ml-[40px]">{icons.facebook()}</span>
            </div>
            <div className=" lg:order-[0] sm:order-[-1]  order-[1]  relative  items-center">
                <ul onClick={() => setOpen(prev => prev === true ? false : true)} className={`cursor-pointer items-center lg:hidden  flex  flex-col ${open ? "h-[36px]" : ""}`}>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all	 ${open ? " rotate-45  absolute" : ""}`}></li>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1  transition-all ${open ? " rotate-135" : ""}`}></li>
                    <li className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all ${open ? " hidden rotate-90" : ""}`}></li>
                </ul>
                <ul className={`justify-center items-center font-medium font-inter lg:flex lg:flex-row lg:bg-transparent lg:mt-[0px] lg:mr-[0px]
                 sm:right-[120px] lg:right-auto lg:translate-x-0  right-[50%] translate-x-[50%]  text-black  flex-col  none lg:relative
                   z-30  absolute  mt-[20px]  bg-yellow-50  rounded-md ${open || " hidden"}`}>
                    {
                        manu.map(({ name, to }) => {
                            return (
                                <Link to={`${to}`} className="flex lg:ml-[60px] lg:py-[0px]  ml-[0px]  py-[20px] lg:w-auto  w-[250px] justify-center">{name} </Link>
                            )
                        })
                    }
                </ul>
            </div>
            <p className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[0px]  mb-[40px]">Foodieland.</p>
        </div>
    )
}

export default UserHeader