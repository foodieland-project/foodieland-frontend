import { useState } from "react";
import React from 'react'
import "./carousel.css";
import CarouselCard from "./carouselCard";
import { icons } from "../../Pages/user/utils/icons";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrowLeft = icons.arrowLeft();
  const arrowRight = icons.arrowRight();

  const carouselData = [
    {
      title: "Spicy delicious chicken wings",
      imageUrl: "./images/baked-chicken-wings.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delenitiplaceat facere quaerat aperiam molestiae est sed quisquam animi quia numquam.",
      id: 1,
    },
    {
      title: "Spicy delicious chicken wings",
      imageUrl: "./images/baked-chicken-wings.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delenitiplaceat facere quaerat aperiam molestiae est sed quisquam animi quia numquam.",
      id: 2,
    },
    {
      title: "Spicy delicious chicken wings",
      imageUrl: "./images/baked-chicken-wings.png",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delenitiplaceat facere quaerat aperiam molestiae est sed quisquam animi quia numquam.",
      id: 3,
    },
  ];
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1
    );
  };
  return (
    <div className="my-10  relative ">
      <div
        onClick={prevSlide}
        className="carousel-arrow absolute top-1/2 left-0 md:left-2 cursor-pointer "
      >
        {arrowLeft}
      </div>
      <div
        className="carousel-arrow absolute top-1/2 right-0 md:right-2 cursor-pointer "
        onClick={nextSlide}
      >
        {arrowRight}
      </div>
      {carouselData.map(({ title, imageUrl, description, id }, index) => {
        return (
          <div
            className={index === currentIndex ? "slide active" : "slide"}
            key={id}
          >
            {index === currentIndex && (
              <CarouselCard
                title={title}
                imageUrl={imageUrl}
                description={description}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
