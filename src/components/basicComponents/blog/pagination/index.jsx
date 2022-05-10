import React from "react";

const Pagination = ({
  postPerPage,
  totalposts,
  paginate,
  currentPage,
  setcurrentPage,
}) => {
  const pagenumber = [];

  for (let i = 1; i <= Math.ceil(totalposts / postPerPage); i++) {
    pagenumber.push(i);
  }

  return (
    <div className="w-full h-20   flex justify-center items-center  mt-6">
      <div className="xl:w-1/2 w-full h-1/2 bg-white flex ml-10">
        {currentPage != 1 ? (
          <div
            onClick={() => setcurrentPage(currentPage - 1)}
            className={` w-10 h-10  mr-2 text-center flex justify-center items-center  text-black  border-gray-300  rounded-md cursor-pointer `}
          >
            {"<"}
          </div>
        ) : null}

        {pagenumber.map((number, index) => (
          <div
            key={index}
            onClick={() => paginate(number)}
            className={` w-10 h-10  mr-1 text-center flex justify-center items-center    border-gray-300 border-2 rounded-md cursor-pointer ${
              pagenumber[index] == currentPage &&
              "bg-black text-white border-0 "
            }`}
          >
            {number}
          </div>
        ))}

        {currentPage < pagenumber.length ? (
          <div
            onClick={() => setcurrentPage(currentPage + 1)}
            className={` w-10 h-10  mr-2 text-center flex justify-center items-center  text-black  border-gray-300  rounded-md cursor-pointer `}
          >
            >
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
