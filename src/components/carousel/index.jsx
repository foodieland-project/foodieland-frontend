import { useState, useRef } from "react";
import React from "react";
import "./carousel.css";
import CarouselCard from "./carouselCard";
import { icons } from "../../services/utils/icons";
import { useSelector } from "react-redux";

function Carousel() {
  const [distance, setDistance] = useState(0);
  const arrowLeft = icons.arrowLeft();
  const arrowRight = icons.arrowRight();
  const widthRef = useRef();
  const recipes = useSelector((state) => state.recipes.recipes);
  const carouselData = recipes.filter((recipe) => recipe.banner !== "");

  const nextSlide = () => {
    let w = widthRef.current.offsetWidth;

    if (distance === -w * 4) {
      setDistance(0);
    } else {
      setDistance((prev) => prev - w);
    }
  };
  const prevSlide = () => {
    let w = widthRef.current.offsetWidth;

    if (distance === 0) {
      setDistance(-w * 4);
    } else {
      setDistance((prev) => prev + w);
    }
  };
  return (
    <div className="my-10 overflow-x-hidden  " ref={widthRef}>
      <div
        onClick={prevSlide}
        className="carousel-arrow absolute top-[430px] sm:top-[330px] md:top-[360px] lg:top-[420px] xl:top-[460px] left-0 md:left-1 cursor-pointer z-10 bg-white rounded-[50%] px-2.5 lg:px-4"
      >
        {arrowLeft}
      </div>
      <div
        className="carousel-arrow absolute top-[430px] sm:top-[330px] md:top-[360px] lg:top-[420px] xl:top-[460px]  right-0 md:right-1 cursor-pointer z-10 bg-white rounded-[50%] px-2.5 lg:px-4"
        onClick={nextSlide}
      >
        {arrowRight}
      </div>
      <div
        className="flex w-max slider"
        style={{ transform: `translateX(${distance}px)` }}
      >
        {carouselData.map(
          ({
            title,
            banner,
            description,
            category,
            chef,
            chefImg,
            uploadDate,
            id,
            cook_time,
          }) => (
            <CarouselCard
              key={id}
              id={id}
              category={category}
              title={title}
              banner={banner}
              chef={chef}
              chefImg={chefImg}
              uploadDate={uploadDate}
              description={description}
              cookTime={cook_time}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Carousel;
