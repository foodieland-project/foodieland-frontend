import React from "react";

function Error404() {
  return (
    <>
      <div className="h-[100vh] bg-[#F4F5FA]">
        <div className="w-[400px] mx-auto">
          <div className="text-center pt-16">
            <h1 className="text-6xl font-semibold text-gray-700 mb-4">404</h1>
            <div className="flex justify-center">
              <h2 className="text-lg text-gray-600 font-semibold">
                Page Not Found
              </h2>
              {/* <RiAlertFill size={25} className="ml-2 text-yellow-500" /> */}
            </div>
            <p className="text-gray-500 pt-1 text-xs">
              we couldn't find the page you are looking for
            </p>
            <div>
              <img
                className="bg-cover py-6 w-[330px] mx-[39%]"
                src="/images/404/pose5.jpg"
                alt=""
              />
            </div>
            <button className="uppercase font-small bg-[#9155FD] text-white rounded-md py-2 px-6">
              back to home
            </button>
          </div>

          <div className="hidden sm:block">
            <img
              className="absolute left-[2%] bottom-[5px] w-[240px]"
              src="/images/errors/Tree.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
