import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { Link } from "react-router-dom";
import { icons } from "../../../../utils/icons";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";

function ForgotPassword() {
  const arrowLeft = icons.arrowLeftPurple();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex mx-4 bg-white w-full rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Forgot Password"}
            text={
              "Enter your email and we will send you instructions to reset your password"
            }
          />
          <form className="w-full px-6 mt-4">
            <Input type="email" placeholder="Email" />
            <Button prop="login" />
          </form>
          <div className="flex justify-center items-center">
            <span>{arrowLeft}</span>
            <span className="text-purple-500 cursor-pointer my-4 mx-2">
              <Link to="/panel/login">Back to login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
