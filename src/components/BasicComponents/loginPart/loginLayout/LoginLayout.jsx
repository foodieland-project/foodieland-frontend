import React from "react";

function LoginLayout() {
  return (
    <div>
      <img className="absolute bottom-0" src="/images/login/Mask.png" alt="" />
      <img
        className="absolute w-[70px] bottom-[9%] right-[7%] hidden sm:block"
        src="/images/login/Tree.png"
        alt=""
      />
      <div>
      <img
          className="absolute w-[50px] left-[7%] bottom-[9%] hidden sm:block"
          src="/images/login/Tree1.svg"
          alt=""
        />
        <img
          className="absolute w-[30px] left-[12%] bottom-[9%] hidden sm:block"
          src="/images/login/Tree.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default LoginLayout;
