import React from 'react'
import img from "./images/higher-bnr.svg"

const Hrest = () => {
  return (
    <div>
    <div className='relative'>
      <img src={img}/>
    <div className='absolute bottom-56 left-56 text-white pl-20 font-black'>
        <p className='text-4xl'>Learn more about us</p>
        <button className='bg-btn text-2xl rounded-3xl p-3 mt-4 mx-24'>CLICK HERE</button>
    </div>
    </div>
    <div className='flex flex-col items-center justify-center mb-20'>
        <p className='font-bold text-5xl m-8'>Contact Us</p>
        <p className='text-3xl'>Contact Info</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
    </div>
    </div>
  )
}

export default Hrest
