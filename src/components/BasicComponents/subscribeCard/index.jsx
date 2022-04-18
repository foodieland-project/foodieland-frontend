import React from 'react';


const SubscribeCard=()=> {
  return (
    <section className='bg-slate-500 w-[1280px] h-[442px] mx-auto  rounded-3xl flex flex-col items-center text-center'>
        <div>
            <h2 className='font-medium text-5xl mt-20 mb-6'>Deliciousness to your inbox</h2>
            <div className='w-[620px]'>
                <p className='font-light text-slate-800'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor</p>
                <p className='font-light text-slate-800'> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
        </div>
        <form className='flex mt-16 justify-center items-center w-[480px]  h-20 relative'>
            <input type="email" name="email" placeholder='Your Email Address ...' className='w-full h-full p-8 rounded-2xl'/>
            <button className='w-40 h-[60px] rounded-2xl bg-black text-white absolute top-0 right-0'> subscribe</button>
        </form>
        
    </section>
  )
}

export default SubscribeCard;