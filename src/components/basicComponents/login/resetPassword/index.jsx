import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { icons } from "../../../../utils/icons";
import { Link } from "react-router-dom";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";

function ResetPassword() {
  const arrowLeft = icons.arrowLeftPurple();

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex mx-4 bg-white w-full rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Reset Password"}
            text={
              " Your new password must be different from previously used passwords"
            }
          />
          <form className="mx-6 mt-4">
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm Password" />
            <Button type={"submit"}>Reset Password</Button>
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

export default ResetPassword;