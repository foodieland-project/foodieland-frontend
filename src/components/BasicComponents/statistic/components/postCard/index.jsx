import React from 'react'

function Card() {
  return (
    <section className='flex flex-col md:justify-between md:flex-row basis-[97%] items-center justify-center p-4'>
        <div className='shadow-2xl border  border-solid border-black md:w-[31%] w-full mr-1 ml-1 h-[200px] mb-2'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
        <div className='shadow-2xl border  border-solid border-black  md:w-[31%] w-full ml-1 mr-1 h-[200px] mb-2'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
        <div className='shadow-2xl border  border-solid border-black md:w-[31%] w-full ml-1 mr-1 h-[200px] mb-2'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
    </section>
  )
}

export default Card;