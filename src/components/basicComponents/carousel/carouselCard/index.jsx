import "./carousel-item.css";
import React from "react";
import { icons } from "../../../../utils/icons";

function CarouselCard({ title, imageUrl, description }) {
  const timerIcon = icons.timer();
  const forkIcon = icons.fork();
  const knifeIcon = icons.knife();
  const playCircleIcon = icons.playCircle();
  return (
    <div className="carousel-item flex rounded-3xl w-[92vw] sm:w-[38em] md:w-[46em] lg:w-[62em] xl:w-[78em] 2xl:w-[94em]  overflow-hidden font-inter ">
      <div className="md:basis-1/2 bg-lameBlue p-5 sm:p-7 lg:p-9">
        <div className="bg-white w-32 lg:w-36 rounded-2xl p-2 text-center">
          <img
            src="./images/image 14.png"
            alt="hot-recipes"
            className="inline-block w-1/5"
          />
          <span className="font-bold text-xs lg:text-sm ml-2 ">
            Hot Recipes
          </span>
        </div>
        <div className="mt-4 mb-6 lg:mt-6 lg:mb-10">
          <h2 className="carousel-title text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
            {title}
          </h2>
        </div>
        <div className="text-secondary text-xs lg:text-sm">
          <p>{description}</p>
        </div>
        <div className=" flex lg:text-sm text-xs  font-medium mt-4 mb-0 sm:mb-8 lg:mt-8 lg:mb-14 xl:mb-20">
          <div className="carousel-icon flex items-center rounded-3xl px-4 py-2 lg:py-2.5">
            <span>
              <i>{timerIcon}</i>
            </span>
            <span className="ml-2">30 Minutes</span>
          </div>
          <div className="carousel-icon flex items-center rounded-3xl px-4 py-2 lg:py-2.5 ml-4 ">
            <span className="flex ">
              <i>{forkIcon}</i>
              <i>{knifeIcon}</i>
            </span>
            <span className="ml-2">Chicken</span>
          </div>
        </div>
        <div className=" justify-between hidden sm:flex">
          <div className="flex ">
            <div>
              <img
                src="./images/Ellipse 2.png"
                alt="chief"
                className="mx-auto w-4/5"
              />
            </div>
            <div className="ml-2">
              <span className="font-bold block text-sm lg:text-base">
                John Smith
              </span>
              <span className="carousel-gray-text-color text-xs lg:text-sm font-medium">
                12 March 2022
              </span>
            </div>
          </div>
          <div className="bg-black text-white rounded-2xl px-3 lg:px-6 text-xs lg:text-sm flex items-center">
            <span className="font-semibold">View Recipes</span>
            <span className="ml-1 lg:ml-2">{playCircleIcon}</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block basis-1/2">
        <div
          className="carousel-bg bg-no-repeat bg-cover w-full h-full bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default CarouselCard;
