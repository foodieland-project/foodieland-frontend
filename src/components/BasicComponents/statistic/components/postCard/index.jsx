import React from 'react';


function Card({data,title}) {
  return (
        <div className='shadow-2xl  md:w-[31%] w-full h-[250px] mb-3 flex flex-col justify-center items-center ml-4'>
          <p className='text-left mb-3'>{title}</p>
          <h2 className='text-6xl font-semibold text-[#C6A7FE] text-left'>{data}</h2>
        </div>
  
  )
}

export default Card;