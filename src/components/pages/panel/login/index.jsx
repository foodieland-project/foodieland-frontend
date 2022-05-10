import React from "react";
import LoginLayout from "../../../basicComponents/login/loginLayout";
import LoginBox from "../../../basicComponents/login/loginBox";
import { useLocation } from "react-router-dom";
import ForgotPassword from "../../../basicComponents/login/forgotPassword";
import ResetPassword from "../../../basicComponents/login/resetPassword";

const Login = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-[100vh] bg-[#F4F5FA]">
      <LoginLayout />
      {pathname === "/panel/login" && <LoginBox />}
      {pathname === "/panel/login/forgetPassword" && <ForgotPassword />}
      {pathname === "/panel/login/resetPassword" && <ResetPassword />}

    </div>
  );
};

export default Login;
