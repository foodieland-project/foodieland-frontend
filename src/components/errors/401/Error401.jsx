import React from 'react'

function Error401() {
  return (
    <>
     <div className="h-[100vh] bg-[#F4F5FA]">
        <div className="w-[400px] mx-auto">
          <div className="text-center pt-16">
            <h1 className="text-6xl font-semibold text-gray-700 mb-4">401</h1>
            <div className="flex justify-center pt-4">
              <h2 className="text-lg text-gray-600 font-semibold">
                You are not authorized!
              </h2>
              {/* <HiLockClosed size={25} className="ml-2 text-yellow-500" /> */}
            </div>
            <p className="text-gray-500 pt-1 text-xs">
              You don't have permission to access this page. Go Home!
            </p>
            <div>
              <img
                className="bg-cover py-6 w-[330px] mx-[35%]"
                src="/images/errors/401.jpg"
                alt=""
              />
            </div>
            <button className="uppercase font-small bg-[#9155FD] text-white rounded-md py-2 px-6">
              back to home
            </button>
          </div>

          <div className="hidden sm:block">
            <img
              className="absolute left-[2%] bottom-[1%] w-[120px]"
              src="/images/errors/Tree2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>   
    </>
  )
}

export default Error401