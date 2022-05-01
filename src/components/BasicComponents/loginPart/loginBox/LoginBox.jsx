import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import { icons } from "../../../Pages/user/utils/icons";
import { Link } from "react-router-dom";

function LoginBox() {
  const facebookIcon = icons.facebookBlue();
  const twitterIcon = icons.twitterBlue();
  const githubIcon = icons.github();
  const googleIcon = icons.google();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex mx-4 bg-white w-full rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <div className="flex items-center">
            <img
              className="w-full h-[25px] mr-2"
              src="/images/login/logo.png"
              alt=""
            />
            <h1 className="py-6 rounded-md text-2xl font-semibold text-slate-700">
              Materio
            </h1>
          </div>
          <div className="mx-6 text-center text-slate-700">
            <div className="flex">
              <h2 className="text-2xl font-semibold">
                Welcome To Materialize!
              </h2>
              {/* <MdWavingHand className="ml-2 mt-1 text-2xl text-[#d0ce48]" /> */}
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Please sign-in to your account and start the advandture
            </p>
          </div>
          <form className="mx-6 my-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <div className="flex justify-between mb-4 w-full">
              <label class="cursor-pointer select-none">
                <input class="mx-2" type="checkbox" />
                <span class="text-slate-600">Remember Me</span>
              </label>
              <span className="text-purple-500 cursor-pointer">
                <Link to="/password/forgot">Forgot Password?</Link>
              </span>
            </div>
            <Button prop="login" type="submit"/>
          </form>
          <div className="text-center my-2 w-full">
            <div className="w-full flex justify-evenly">
              <span className="text-gray px-4 text-gray-500">
                New on our platform?
              </span>
              <span className="text-purple-500 cursor-pointer">
                <Link to="/register">Create an account</Link>
              </span>
            </div>
            <div className="my-4 mx-6 relative mb-6">
              <hr />
              <span className="text-gray-600 absolute left-[45%] top-[-14px] w-10 text-left pl-3 bg-white">
                or
              </span>
            </div>
            <div className="flex justify-center text-2xl mb-4 w-full">
              <span className="mx-4 cursor-pointer">{facebookIcon}</span>
              <span className="mx-4 cursor-pointer">{twitterIcon}</span>
              <span className="mx-4 cursor-pointer">{githubIcon}</span>
              <span className="mx-4 cursor-pointer">{googleIcon}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
