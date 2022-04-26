import SubscribeCard from '../../BasicComponents/subscribeCard'
import React from 'react'
import { icons } from "../../../utils/icons"
import RecommendedRecipes from '../../BasicComponents/recommendedRecipes'

const Post = () => {
  return (
    <>
      <h1 className="flex justify-center text-inter font-semibold text-center font-[64px] md:w-[100%] w-[80%] m-auto mt-[80px] mb-[44px] ">Full Guide to Becoming a Professional Chef</h1>
      <div className="flex 2sm:flex-row flex-col justify-center mb-[44px]">
        <div className="flex items-center justify-center 2sm:mb-auto mb-[20px]">
          <div className="w-[40px] h-40px ">
            <img src="http://localhost:3000/images/post/Ellipse-2.png" alt="" className="flex" />
          </div>
          <p className="flex ml-[15px] justify-center">John Smith</p>
        </div>
        <div className="flex items-center 2sm:border-l-[1px] justify-center 2sm:border-r-gray-100 2sm:ml-[61px] px-[24px]">
          <p className="flex">15 March 2022</p>
        </div>
      </div>
      <p className="text-center items-center m-auto w-[80%] mb-[71px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
        at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
      <div className='sm:mx-[80px] mx-[10px] mb-[71px]'>
        <img className='rounded-xl' src="http://localhost:3000/images/post/image-29.png" alt="" />
      </div>
      <div className="flex flex-col-reverse xl:flex-row-reverse sm:mx-[80px] mx-[10px] xl:mx-[190px]">
        <div className="flex flex-col xl:justify-start items-center xl:items-center xl:w-[20.6%]">
          <p className='mb-[32px]'>SHARE THIS ON:</p>
          <div className='flex flex-row justify-center items-center xl:flex-col'>
            <span className="flex xl:mb-[48px] ">{icons.facebook()}</span>
            <span className="flex xl:mb-[48px] mx-[48px] xl:mx-auto">{icons.instagram()}</span>
            <span className="flex xl:mb-[48px] ">{icons.twitter()}</span>
          </div>
        </div>
        <div className='xl:w-[79.3%]'>
          <div className="flex flex-col mb-[112px]">
            <h2 className="flex text-inter font-semibold font-[64px] mb-[24px]">How did you start out in the food industry?</h2>
            <p className="flex text-inter font-normal font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className="flex flex-col mb-[84px]">
            <h2 className="flex text-inter font-semibold font-[64px] mb-[24px]">How did you start out in the food industry?</h2>
            <p className="flex text-inter font-normal font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className="flex flex-col mb-[56px]">
            <h2 className="flex text-inter font-semibold font-[64px] mb-[24px]">How did you start out in the food industry?</h2>
            <img className='mb-[32px]' src="http://localhost:3000/images/post/Rectangle-23.png" alt="" />
            <p className="flex text-inter font-normal font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className="flex flex-col mb-[112px]">
            <h2 className="flex text-inter font-semibold font-[64px] mb-[24px]">How did you start out in the food industry?</h2>
            <p className="flex text-inter font-normal font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className="flex flex-col mb-[112px]">
            <h2 className="flex text-inter font-semibold font-[64px] mb-[24px]">How did you start out in the food industry?</h2>
            <p className="flex text-inter font-normal font-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam,
              at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
        </div>
      </div>
      <SubscribeCard />
      <RecommendedRecipes />
    </>
  )
}

export default Post