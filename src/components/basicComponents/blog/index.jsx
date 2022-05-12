import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import SubscribeCard from "../subscribeCard";
import OtherRecipes from "../ingredients/components/otherRecipes";
import BlogHeader from "./components/blogHeader";
import BlogCard from "./components/blogCard";
import BlogSearchBox from "./components/blogSearchBox";
const RecipeData = [
  {
    id: 1,
    category: "product",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    img: "images/recipes/food-13.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 2,
    category: "product",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    img: "images/recipes/food-14.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 3,
    category: "product",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    img: "images/recipes/food-15.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 4,
    category: "product",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    img: "images/recipes/food-16.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 5,
    category: "product",
    title: "Chicken Meatballs with Cream Cheese",
    img: "images/recipes/food-17.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 6,
    category: "banner",
    title: "Don’t forget to eat healthy food",
    img: "images/Star-1.png",
    chef: "Andreas Paula",
  },
  {
    id: 7,
    category: "product",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    img: "images/recipes/food-18.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 8,
    category: "product",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    img: "images/recipes/food-19.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
  {
    id: 9,
    category: "product",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    img: "images/recipes/food-20.png",
    Meal: "Breakfast",
    time: "30 Minutes",
    liked: false,
    chef: "Andreas Paula",
  },
];

const articleData = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-1.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 2,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-2.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 3,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-3.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 4,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-4.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 5,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-5.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 6,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-6.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 7,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-7.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 8,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-8.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 9,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-1.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 10,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-2.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 11,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-3.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
  {
    id: 12,
    title: "Big and Juicy Wagyu Beef ",
    content:
      "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    img: "images/delicious-recipe/food-4.png",
    date: "12 November 2022",
    writer: "Wade warren",
    profile: "images/Ellipse 3.png",
  },
];

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
