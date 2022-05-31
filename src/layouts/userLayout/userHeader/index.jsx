import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

const manu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Recipes",
    to: "/recipes",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: "About Us",
    to: "/aboutUs",
  },
];

const UserHeader = () => {
  const { userPhoto, isLogged } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [userDropOpen, setUserDropOpen] = useState(false);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    setUserDropOpen(false);
  };

  return (
    <div className=" border-b-[1px] border-gray-300 font-inter">
      <div className="flex py-5 sm:py-[46px] lg:justify-between flex-row-reverse  justify-between sm:items-center mx-6 sm:mx-[80px] ">
        <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px]  mb-[0px] font-semibold">
          <div className="ml-4 relative">
            <img
              src={`${userPhoto}`}
              alt="avatar"
              className="w-10 h-10 rounded-3xl object-cover cursor-pointer"
              onClick={() => setUserDropOpen(!userDropOpen)}
            />
            <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
            {userDropOpen && (
              <ul className="flex flex-col absolute bg-yellow-50 pt-2 pb-3 items-center px-6 rounded-md -left-8 mt-4 z-10">
                {isLogged && (
                  <Fragment>
                    <li className="mt-1">
                      <Link
                        to="/panel/posts"
                        className="hover:scale-105 hover:text-blue-500 font-medium text-[17px]"
                      >
                        panel
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link
                        to="/"
                        onClick={logoutHandler}
                        className="hover:scale-105 hover:text-blue-500 font-medium  text-[17px]"
                      >
                        logout
                      </Link>
                    </li>
                  </Fragment>
                )}
                {!isLogged && (
                  <Fragment>
                    <li className="mt-1 w-16 text-center">
                      <Link
                        to="/panel/login"
                        className="hover:scale-105 hover:text-blue-500 font-medium text-[17px]"
                      >
                        log in
                      </Link>
                    </li>
                    <li className="mt-1 w-16 text-center">
                      <Link
                        to="/panel/register"
                        className="hover:scale-105 hover:text-blue-500 font-medium  text-[17px]"
                      >
                        sign up
                      </Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            )}
          </div>
        </div>
        <div className=" lg:order-[0] order-[-1]    relative  items-center">
          <ul
            onClick={() => setOpen((prev) => (prev === true ? false : true))}
            className={`cursor-pointer justify-center items-center lg:hidden  flex  flex-col ${
              open ? "h-[36px]" : ""
            }`}
          >
            <li
              className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all	 ${
                open ? " rotate-45  absolute" : ""
              }`}
            ></li>
            <li
              className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1  transition-all ${
                open ? " rotate-135" : ""
              }`}
            ></li>
            <li
              className={`w-[30px] h-[8px] bg-black rounded-md inline mb-1 transition-all ${
                open ? " hidden rotate-90" : ""
              }`}
            ></li>
          </ul>
          <ul
            className={`justify-center items-center font-medium font-inter lg:flex lg:flex-row lg:bg-transparent lg:mt-[0px] lg:mr-[0px]
                 right-[120px] lg:right-auto lg:translate-x-0   translate-x-[50%]  text-black  flex-col  none lg:relative
                   z-30  absolute  mt-[20px]  bg-yellow-50  rounded-md ${
                     open || " hidden"
                   }`}
          >
            {manu.map(({ name, to }, index) => (
              <NavLink
                key={index}
                to={`${to}`}
                className={
                  " user-header-option flex lg:ml-[60px] lg:py-[0px]  ml-[0px]   py-[20px] lg:w-auto  w-[250px] justify-center hover:scale-125 hover:text-blue-500 transition-all"
                }
              >
                {name}{" "}
              </NavLink>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[0px] mb-[0px] cursor-pointer"
        >
          Foodieland.
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;
