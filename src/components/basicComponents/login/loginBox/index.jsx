import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { icons } from "../../../../utils/icons";
import { Link } from "react-router-dom";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";

function LoginBox() {
  const facebookIcon = icons.facebookBlue();
  const twitterIcon = icons.twitterBlue();
  const githubIcon = icons.github();
  const googleIcon = icons.google();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex sm:mx-4 bg-white h-full sm:h-auto w-full justify-center rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Welcome To Foodieland!"}
            text={" Please sign-in to your account and start the adventure"}
          />
          <form className="w-[85%] mx-6 my-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <div className="flex justify-between mb-4 w-full">
              <label class="cursor-pointer select-none">
                <input class="mx-2" type="checkbox" />
                <span class="text-slate-600">Remember Me</span>
              </label>
              <span className="text-purple-500 cursor-pointer">
                <Link to="/panel/login/forgetPassword">Forgot Password?</Link>
              </span>
            </div>
            <Button type={"submit"}>Login</Button>
          </form>
          <div className="text-center my-2 w-[85%] sm:w-full">
            <div className="w-full flex justify-between sm:justify-evenly">
              <span className="text-gray text-gray-500">
                New on our platform?
              </span>
              <span className="text-purple-500 cursor-pointer">
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
