import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { icons } from "../../../services/utils/icons";
import { Link } from "react-router-dom";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";
import { VALIDATOR_PASSWORD } from "../components/validator/validators";

function ResetPassword() {
  const arrowLeft = icons.arrowLeftPurple();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex  bg-white w-full h-full sm:h-auto justify-center rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Reset Password"}
            text={
              " Your new password must be different from previously used passwords"
            }
          />
          <form className="mx-6 mt-4 w-[350px]">
            <Input
              type="password"
              placeholder="New Password"
              validators={[VALIDATOR_PASSWORD()]}
              errorText="must contain at least 6 charachters, 1 uppercase, lowercase and number"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              validators={[VALIDATOR_PASSWORD()]}
              errorText="must contain at least 6 charachters, 1 uppercase, lowercase and number"
            />
            <Button type="submit">login</Button>
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

export default ResetPassword;
