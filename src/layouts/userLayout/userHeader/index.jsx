import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";

const UserHeader = () => {
  const [open, setOpen] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

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

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className=" border-b-[1px] border-gray-300 font-inter">
      <div className="flex py-[46px] lg:justify-between sm:flex-row-reverse  flex-col sm:justify-between sm:items-center mx-[80px] ">
        <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px]  mb-[40px] font-semibold">
          {isLogged && (
            <Fragment>
              <Link to="/panel/posts">
                <div className="ml-4 relative">
                  <img
                    src="/images/panel/blue-avatar.png"
                    alt="avatar"
                    className="w-10 h-10 rounded-3xl"
                  />
                  <span className="bg-green-500 rounded-3xl absolute bottom-0 right-0 w-[12px] h-[12px] border-2 border-white"></span>
                </div>
              </Link>
              <Link to="/" onClick={logoutHandler}>
                <span
                  className="flex justify-center ml-[15px] header-icon cursor-pointer border-2 border-black px-2 py-0.5
             bg-lameBlue rounded-md hover:bg-darkBlue transition-all"
                >
                  Logout
                </span>
              </Link>
            </Fragment>
          )}
          {!isLogged && (
            <Fragment>
              <Link to="/panel/login">
                <span className="flex justify-center header-icon cursor-pointer hover:scale-110 transition-all    ">
                  Log In
                </span>
              </Link>
              <Link to="/panel/register">
                <span
                  className="flex justify-center ml-[10px] header-icon cursor-pointer border-2 border-black px-2 py-0.5
             bg-lameBlue rounded-md hover:bg-darkBlue transition-all"
                >
                  Sign Up
                </span>
              </Link>
            </Fragment>
          )}
        </div>
        <div className=" lg:order-[0] sm:order-[-1]  order-[1]  relative  items-center">
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
                 sm:right-[120px] lg:right-auto lg:translate-x-0  right-[50%] translate-x-[50%]  text-black  flex-col  none lg:relative
                   z-30  absolute  mt-[20px]  bg-yellow-50  rounded-md ${
                     open || " hidden"
                   }`}
          >
            {manu.map(({ name, to }, index) => (
              <NavLink
                key={index}
                to={`${to}`}
                className={
                  " user-header-option flex lg:ml-[60px] lg:py-[0px]  ml-[0px]   py-[20px] lg:w-auto  w-[250px] justify-center hover:scale-110 hover:text-blue-500 transition-all"
                }
              >
                {name}{" "}
              </NavLink>
            ))}
          </ul>
        </div>
        <Link
          to="/"
          className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[0px] mb-[40px] cursor-pointer"
        >
          Foodieland.
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;
