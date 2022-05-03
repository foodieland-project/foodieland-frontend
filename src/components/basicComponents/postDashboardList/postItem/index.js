import React from 'react'

function postItem({title,category,time,view,comments}) {
    return (
        <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-[30px] p-[20px] rounded-md items-center my-1 ">
            <p className="w-[50%] text-center">{title}</p>
            <p className="w-[10%] text-center">{category}</p>
            <p className="w-[20%] text-center">{time}</p>
            <p className="w-[10%] text-center">{view}</p>
            <p className="w-[10%] text-center">{comments}</p>
        </div>
    );
}

export default postItem