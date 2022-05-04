import React from "react";

function StatisticCard({ numbers }) {
  return (
    <div className="basis-[30%]">
      <div className="w-full h-full shadow-2xl flex flex-col justify-center items-center ">
        <h2 className="mb-3">users</h2>
        <p className="text-darkPurple text-4xl font-semibold"> {numbers}</p>
      </div>
    </div>
  );
}

export default StatisticCard;
