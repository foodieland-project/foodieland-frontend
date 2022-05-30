import React from "react";
import { useLocation } from "react-router-dom";
import { icons } from "../../../services/utils/icons";
import "./pagination.css";

function Pagination({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const { pathname } = useLocation();
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="w-full h-20   flex justify-end items-center  mt-6">
      <ul
        className={`${
          pathname == "/recipes"
            ? " xl:justify-start"
            : "lg:justify-end xl:justify-center"
        } xl:w-1/2 w-full h-1/2 bg-white flex ml-10 justify-center   `}
      >
        <li
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`${
            currentPage === 1 && "invisible"
          } blog-page-arrow w-10 h-10  mr-2 text-center flex justify-center items-center  text-black border-2 border-gray-200
            rounded-md cursor-pointer hover:bg-gray-100 transition-all`}
        >
          {icons.arrowLeft()}
        </li>

        {pageNumber.map((number, index) => (
          <li
            key={index}
            onClick={() => paginate(number)}
            className={` w-10 flex justify-center items-center mr-2    border-gray-200 border-2 rounded-md cursor-pointer 
            hover:bg-gray-100 transition-all ${
              pageNumber[index] == currentPage &&
              "bg-black text-white border-0 hover:bg-black"
            }`}
          >
            {number}
          </li>
        ))}

        <li
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`${
            currentPage === pageNumber.length && "invisible"
          } blog-page-arrow w-10 h-10  mr-2 text-center flex justify-center items-center  text-black border-2  border-gray-200 
           rounded-md cursor-pointer hover:bg-gray-100 transition-all `}
        >
          {icons.arrowRight()}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
