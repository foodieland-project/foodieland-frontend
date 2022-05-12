import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import SubscribeCard from "../subscribeCard";
import OtherRecipes from "../ingredients/components/otherRecipes";
import BlogHeader from "./components/blogHeader";
import BlogCard from "./components/blogCard";
import BlogSearchBox from "./components/blogSearchBox";
import { articleData, RecipeData } from "../../../utils/data";

const Blog = () => {
  const [filtered, setfiltered] = useState(articleData);
  ///////////PAGINATION//////////

  const [currentPage, setcurrentPage] = useState(1);
  const [PostPerPage, setPostPerPage] = useState(6);

  // get the current post pagination
  const indexOfLastPost = currentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  // changing page  PAGINATE
  const paginate = (Pagenumber) => setcurrentPage(Pagenumber);

  ///////////PAGINATION//////////

  // Search and filtering data
  const handleChange = (event) => {
    let keyword = event.target.value;
    let data = articleData.filter((item) => {
      return (
        item.category.toLowerCase().indexOf(keyword) > -1 ||
        item.title.toLowerCase().indexOf(keyword) > -1
      );
    });

    setfiltered(data);
  };

  return (
    <>
      <BlogHeader />

      <BlogSearchBox handleChange={handleChange} />

      <div className="">
        <section className="w-11/12 xl:w-full mx-auto flex flex-wrap lg:flex-nowrap gap-10 font-inter my-10 lg:my-20  ">
          <div className=" basis-[100%] lg:basis-[66%] relative ">
            {currentPosts.map(
              ({ id, title, content, img, date, writer, profile }, index) => (
                <Link to={`/blog/${id + 1}`}>
                  {" "}
                  <BlogCard
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    img={img}
                    date={date}
                    writer={writer}
                    profile={profile}
                  />
                </Link>
              )
            )}
          </div>

          <OtherRecipes
            RecipeData={RecipeData}
            number={3}
            title={"Tasty Recipes"}
          />
        </section>
        <div className="w-auto">
          <Pagination
            postPerPage={PostPerPage}
            totalposts={filtered.length}
            paginate={paginate}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </div>

        <SubscribeCard />
      </div>
    </>
  );
};

export default Blog;
