import React from "react";

function Error500() {
  return (
    <>
      <div className="h-[100vh] bg-[#F4F5FA]">
        <div className="w-[400px] text-center mx-auto">
          <h1 className="text-6xl font-semibold text-gray-700 pt-16">500</h1>
          <div className="flex justify-center pt-4">
            <h2 className="text-lg text-gray-600 font-semibold">
              Internal server error
            </h2>
            {/* <HiLockClosed size={25} className="ml-2 text-yellow-500" /> */}
          </div>
          <p className="text-gray-500 pt-1 text-xs">
            Oops something went wrong
          </p>

          <img
            className="py-6 w-[350px] mx-[35%] md:mx-[33%] sm:mx-[44%]"
            src="/images/errors/500.jpg"
            alt=""
          />
          <button className="uppercase font-small bg-[#9155FD] text-white rounded-md py-2 px-6">
            back to home
          </button>
        </div>

        <div className="hidden sm:block">
          <div>
            <img
              className="absolute left-[12%] bottom-[10%] px-[10px]"
              src="/images/errors/TreeSm.svg"
              alt=""
            />
            <img
              className="absolute left-[7%] bottom-[10%]"
              src="/images/errors/TreeLg.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Error500;
