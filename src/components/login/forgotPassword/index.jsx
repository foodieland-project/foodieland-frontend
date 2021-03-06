import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { Link } from "react-router-dom";
import { icons } from "../../../services/utils/icons";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";
import { VALIDATOR_EMAIL } from "../components/validator/validators";

function ForgotPassword() {
  const arrowLeft = icons.arrowLeftPurple();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex sm:mx-4 bg-white h-full sm:h-auto w-full justify-center rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Forgot Password"}
            text={
              "Enter your email and we will send you instructions to reset your password"
            }
          />
          <form className="w-full px-6 mt-4">
            <Input
              type="email"
              placeholder="Email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="password must be valid"
            />
            <Button type="submit">email me</Button>
          </form>
          <div className="flex justify-center items-center">
            <span>{arrowLeft}</span>
            <span className="text-mainBlue cursor-pointer my-4 mx-2">
              <Link to="/panel/login">Back to login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
