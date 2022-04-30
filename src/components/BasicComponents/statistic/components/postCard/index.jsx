import React from 'react'

function Card() {
  return (
    <section className='flex flex-col md:justify-between md:flex-row  item-center  m-4'>
        <div className='shadow-2xl border  border-solid border-black md:w-1/3  mr-1 ml-1'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
        <div className='shadow-2xl border  border-solid border-black md:w-1/3  ml-1 mr-1'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
        <div className='shadow-2xl border  border-solid border-black md:w-1/3  ml-1 mr-1'>
            <h2>user</h2>
            <p>$ 20</p>
        </div>
    </section>
  )
}

export default Card