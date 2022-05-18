import React from "react";
import Button from "../components/button";
import { icons } from "../../../services/utils/icons";
import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";

function LoginBox() {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("panel/statistic", { replace: true });
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex sm:mx-4 bg-white h-full sm:h-auto w-full justify-center rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Welcome To Foodieland!"}
            text={" Please sign-in to your account and start the adventure"}
          />
          <form className="w-[85%] mx-6 my-4" onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="password"
              />
            </div>
            <div className="flex justify-between w-full mb-1">
              <label className="cursor-pointer select-none">
                <input className="mx-2" type="checkbox" />
                <span className="text-slate-600">Remember Me</span>
              </label>
              <Link to="/panel/login/forget-password">
                <span className="text-mainBlue cursor-pointer">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <Button type="submit">login</Button>
          </form>
          <div className="text-center my-2 w-[85%] sm:w-full">
            <div className="w-full flex justify-between sm:justify-evenly">
              <span className="text-gray text-gray-500">
                New on our platform?
              </span>
              <span className="text-mainBlue cursor-pointer">
                <Link to="/panel/register">Create an account</Link>
              </span>
            </div>
            <div className="my-4 mx-6 relative mb-6">
              <hr />
              <span className="text-gray-600 absolute left-[45%] top-[-14px] w-10 text-left pl-3 bg-white">
                or
              </span>
            </div>
            <div className="flex justify-center text-2xl mb-4 w-full">
              <span className="mx-4 cursor-pointer">
                {icons.facebookBlue()}
              </span>
              <span className="mx-4 cursor-pointer">{icons.twitterBlue()}</span>
              <span className="mx-4 cursor-pointer">{icons.github()}</span>
              <span className="mx-4 cursor-pointer">{icons.google()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
