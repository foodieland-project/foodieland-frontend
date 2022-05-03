import React from "react";
import PanelLayout from "../../../layout/panelLayout";
import LoginLayout from "../../../basicComponents/loginPart/loginLayout";
import LoginBox from "../../../basicComponents/loginPart/loginBox";

const Login = () => {
  return (
    <PanelLayout>
      <div className="h-[100vh] bg-[#F4F5FA]">
        {/* This is background of login */}
        <LoginLayout />

        {/* if route was '/login' then render*/}
        <LoginBox />

        {/* ========= else others ========= */}
        {/* <RegisterBox /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
      </div>
    </PanelLayout>
  );
};

export default Login;
