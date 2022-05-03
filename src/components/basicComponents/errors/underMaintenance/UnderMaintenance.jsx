import React from "react";

function UnderMaintenance() {
  return (
    <>
      <div className="h-[100vh] bg-[#fff]">
        <div className="w-[400px] mx-auto">
          <div className="text-center pt-16">
            <div className="flex justify-center pt-4">
              <h2 className="text-2xl text-gray-600 font-semibold">
                Under Maintenance
              </h2>
              {/* <MdBuild size={25} className="ml-2 text-yellow-500" /> */}
            </div>
            <p className="text-gray-500 pt-1 text-[14px]">
              Sorry for the inconvenience but we're performing some maintenance
              at the moment
            </p>
            <div>
              <img
                className="bg-cover py-6 w-[330px] mx-[35%]"
                src="/images/errors/pose3.jpg"
                alt=""
              />
            </div>
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
      </div>
    </>
  );
}

export default UnderMaintenance;
