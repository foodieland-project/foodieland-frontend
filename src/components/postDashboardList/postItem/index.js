import React from 'react'

function PostItem({ title, category, time, view, comments }) {
    return (
        <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-[30px] p-[20px] rounded-md items-center my-1">
            <p className="w-[100%] sm:w-[80%] md:[50%] text-center ">{title}</p>
            <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">{category}</p>
            <p className="md:w-[40%] text-center md:block hidden">{time}</p>
            <p className="w-[10%] text-center xl:block hidden">{view}</p>
            <p className="w-[10%] text-center xl:block hidden">{comments}</p>
        </div>
    );
}

export default PostItem