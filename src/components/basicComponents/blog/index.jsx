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
  const [posts, setPosts] = useState(articleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage] = useState(6);

  const indexOfLastPost = currentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (PageNumber) => setCurrentPage(PageNumber);

  const searchHandler = (event) => {
    let keyword = event.target.value;
    let data = articleData.filter((item) => {
      return item.title.toLowerCase().includes(keyword);
    });
    setPosts(data);
  };

  return (
    <>
      <BlogHeader />

      <BlogSearchBox searchHandler={searchHandler} />

      <div className="">
        <section className="w-11/12 xl:w-full mx-auto flex flex-wrap lg:flex-nowrap gap-10 font-inter my-10 lg:my-20  ">
          <div className=" basis-[100%] lg:basis-[66%] relative ">
            {currentPosts.map(
              ({ id, title, content, img, date, writer, profile }) => (
                <Link key={id} to={`/blog/${id}`}>
                  <BlogCard
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
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <SubscribeCard />
      </div>
    </>
  );
};

export default Blog;
