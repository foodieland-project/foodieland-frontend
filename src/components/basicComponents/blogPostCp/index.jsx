import React from "react";
import { icons } from "../../../utils/icons";
import RecommendedRecipes from "../recommendedRecipes";
import SubscribeCard from "../subscribeCard";
import BlogContent from "./blogPostContent";
import "./blog-post.css";
const BlogPostCp = () => {
  return (
    <div className="font-inter">
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-24 text-center">
        Full Guide to Becoming a Professional Chef
      </h1>
      <div className="flex 2sm:flex-row flex-col justify-center mb-[44px] mt-12">
        <div className="flex items-center justify-center 2sm:mb-auto mb-[20px]">
          <div className="w-[40px] h-40px ">
            <img
              src="http://localhost:3000/images/post/Ellipse-2.png"
              alt=""
              className="flex"
            />
          </div>
          <p className="flex ml-[15px] justify-center font-bold">John Smith</p>
        </div>
        <div className="flex items-center 2sm:border-l-[1px] justify-center 2sm:border-r-gray-100 2sm:ml-[61px] px-[24px]">
          <p className="font-medium text-sm  text-secondary">15 March 2022</p>
        </div>
      </div>
      <p className="text-center m-auto w-[80%] mb-[71px] text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula
        sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.
      </p>
      <div className=" mb-[71px]">
        <img
          className="rounded-3xl"
          src="http://localhost:3000/images/post/image-29.png"
          alt=""
        />
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="basis-[100%] lg:basis-[66%]">
          <BlogContent />
        </div>
        <div className="basis-[100%] lg:basis-[20%] ">
          <h4 className="mb-[32px] font-semibold text-sm text-center">
            SHARE THIS ON:
          </h4>
          <div className="flex flex-row justify-center items-center lg:flex-col">
            <span className="blog-post-icon cursor-pointer lg:mb-[48px] ">
              {icons.facebook()}
            </span>
            <span className="blog-post-icon cursor-pointer lg:mb-[48px] mx-[48px] xl:mx-auto">
              {icons.instagram()}
            </span>
            <span className="blog-post-icon cursor-pointer lg:mb-[48px] ">
              {icons.twitter()}
            </span>
          </div>
        </div>
      </div>
      <SubscribeCard />
      <RecommendedRecipes />
    </div>
  );
};

export default BlogPostCp;
