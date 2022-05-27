import React, { useEffect, useState } from "react";
import PostItem from "./postItem";
import { icons } from "../../services/utils/icons";
import Search from "./search";
import "./posts.css";
import { useSelector } from "react-redux";

const PostDashboardList = () => {
  const { recipes } = useSelector((state) => state.recipes);
  const [FormData, setFormData] = useState(recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [valueSearch, setValueSearch] = useState("");
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginationNumbers = Math.ceil(FormData.length / postPerPage);
  const slicedData = FormData.slice(indexOfFirstPost, indexOfLastPost);
  const [categoryOp, setCategory] = useState("");

  useEffect(() => {
    if (valueSearch.length > 0) {
      const items = recipes.filter(({ title }) => {
        return title.includes(valueSearch);
      });
      setFormData(items);
    } else {
      setFormData(recipes);
    }
  }, [valueSearch]);

  useEffect(() => {
    if (categoryOp.length > 0) {
      const items = recipes.filter(({ category }) => {
        return category.includes(categoryOp);
      });
      setFormData(items);
    } else {
      setFormData(recipes);
    }
  }, [categoryOp]);

  const handlePrevious = (setCurrentPage, currentPage) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (setCurrentPage, currentPage, paginationNumbers) => {
    if (currentPage < paginationNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row xl:justify-between  text-[14px]  items-center m-[10px]">
        <div className="flex justify-center items-center w-[150px] m-[20px]">
          <label className="mr-[5px]" htmlFor="category">
            Category:
          </label>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="rounded-md border-[1px] border-gray-400 h-[30px]"
            name="category"
            id="category"
          >
            <option value="">All</option>
            <option value="ّFood">Food</option>
            <option value="Water">Water</option>
            <option value="Recipe">Recipe</option>
          </select>
        </div>
        <Search setValueSearch={setValueSearch} />
        <div className="flex flex-row items-center m-[30px] ">
          <span
            onClick={() => {
              handlePrevious(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="posts-arrow bg-lameBlue text-mainBlue hover:bg-darkBlue transition-all cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowLeft()}
          </span>
          <div className="mx-[5px]">
            <span>page </span>
            <input
              className="w-[30px] h-[30px] rounded-md border-[1px] border-gray-400 text-center"
              type="text"
              value={currentPage}
              onChange={(e) => {
                setCurrentPage(e.target.value);
              }}
            ></input>
            <span>{` from ${paginationNumbers}`}</span>
          </div>
          <span
            onClick={() => {
              handleNext(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="posts-arrow bg-lameBlue text-mainBlue hover:bg-darkBlue transition-all cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowRight()}
          </span>
        </div>
      </div>
      <div className="text-[14px]">
        <div className="flex flex-row items-center text-white bg-mainBlue border-[1px] h-[30px] p-[20px] rounded-md ">
          <p className="w-[100%] sm:w-[80%] md:[50%] text-center ">title</p>
          <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">
            category
          </p>
          <p className="md:w-[40%] text-center md:block hidden">upload date</p>
          <p className="w-[10%] text-center xl:block hidden">likes</p>
          <p className="w-[10%] text-center xl:block hidden">comments</p>
        </div>
        {slicedData.map(
          ({ id, title, category, uploadDate, liked, comments }) => (
            <PostItem
              key={id}
              id={id}
              title={title}
              category={category}
              time={uploadDate}
              likes={liked}
              comments={comments.length}
            />
          )
        )}
      </div>
    </>
  );
};

export default PostDashboardList;
