import React from "react";

function LaunchingSoon() {
  return (
    <>
      <div className="h-[100vh] bg-[#F4F5FA]">
        <div className="w-[400px] mx-auto">
          <div className="text-center pt-16">
            <div className="flex justify-center pt-4">
              <h2 className="text-xl text-gray-600 font-semibold">
                We are launching soon
              </h2>
              {/* <ImRocket size={25} className="ml-2 text-red-500" /> */}
            </div>
            <p className="text-gray-500 pt-1 text-sm">
              Our website is opening soon. Please register to get notified when
              it's ready!
            </p>
            <div className="mt-4 flex justify-between">
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full border-2 rounded-md p-1.5 mr-2 outline-none"
              />
              <button className="uppercase bg-[#9155FD] text-white rounded-md w-[120px]">
                Notify
              </button>
            </div>
            <div>
              <img
                className="bg-cover py-4 w-[330px] mx-[35%]"
                src="/images/errors/soon.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <img
            className="absolute w-[120px] left-[2%] bottom-[1%]"
            src="/images/errors/Tree2.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default LaunchingSoon;
