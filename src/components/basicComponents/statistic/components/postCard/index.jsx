import React from "react";

function StatisticCard({ numbers }) {
  return (
    <div className="h-[100px] md:h-auto md:w-[200px] lg:w-[300px] xl:w-[300px]">
      <div className="w-full h-full shadow-md md:shadow-2xl flex flex-col justify-center items-center ">
        <h2 className="mb-3">users</h2>
        <p className="text-darkPurple text-3xl lg:text-4xl font-semibold">
          {" "}
          {numbers}
        </p>
      </div>
    </div>
  );
}

export default StatisticCard;
