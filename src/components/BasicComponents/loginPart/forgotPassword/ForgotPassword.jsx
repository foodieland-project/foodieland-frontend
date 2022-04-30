import React from "react";
import { FaLock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/fa";
import Button from "../button/Button";
import Input from "../input/Input";

function ForgotPassword() {
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
          <div className="mx-6 text-left text-slate-700">
            <div className="flex">
              <h2 className="text-2xl font-semibold text-slate-600">
                Forgot Password
              </h2>
              <FaLock className="ml-2 mt-1 text-2xl" />
            </div>
            <p className="text-gray-400 text-sm mt-1">
              Enter your email and we'll send you instructions to reset your
              password
            </p>
          </div>
          <form className="w-full px-6 mt-4">
            <Input type="email" placeholder="Email" />
            <Button prop="login" />
          </form>
          <div className="flex justify-center items-center">
            <IoIosArrowBack size={20} className="text-purple-500" />
            <span className="text-purple-500 cursor-pointer my-4 mx-2">
              Back to login
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
