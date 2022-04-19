import React from 'react';
import "./subscribeCard.css";

const SubscribeCard=()=> {
 
  return (
    <section className='container w-[1280px] h-[442px] mx-auto  rounded-[60px] flex flex-col items-center text-center bg-[#E7F9FD] my-10'>
        <div className='text-black'>
            <div className='w-[589px] h-[58px] tracking-[-0.04em] mb-6'>
              <h2 className='font-medium text-5xl mt-20 mb-6 leading-[58px]'>Deliciousness to your inbox</h2>
            </div>
            <div className='w-[620px] h-[56px] text-center font-normal text-[rgba(0,0,0,0.6)] text-[16px]'>
                <p className='leading-[28px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor</p>
                <p className='leading-[28px]'> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
        </div>
         <div className='formContainer container flex justify-between items-center relative'>
            <form className='flex justify-center items-center w-[480px]  h-20 relative mt-16 mb-20 mx-[400px] rounded-3xl	bg-white'>
            <input type="email" name="email" placeholder='Your Email Address ...' className='w-full h-full pl-8 py-8 rounded-2xl text-[17px] tracking-[-0.02em] leading-[17px] text-[rgba(0,0,0,0.4)]'/>
            <button className='w-40 h-[60px] rounded-2xl bg-black text-white absolute top-auto right-0 my-2.5 mr-2.5'> subscribe</button>
         </form>
         </div>
    </section>
  )
}

export default SubscribeCard;