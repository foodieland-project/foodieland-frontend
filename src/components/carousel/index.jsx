import { useState, useRef } from "react";
import React from "react";
import "./carousel.css";
import CarouselCard from "./carouselCard";
import { icons } from "../../services/utils/icons";
import { carouselData } from "../../services/utils/data";

function Carousel() {
  const [distance, setDistance] = useState(0);
  const arrowLeft = icons.arrowLeft();
  const arrowRight = icons.arrowRight();
  const widthRef = useRef();

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
        {carouselData.map(({ title, imageUrl, description, id }) => (
          <CarouselCard
            key={id}
            title={title}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
