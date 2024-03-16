import React from 'react';
import Popup from './FloorFeature.js';
import HoverFeature from './FloorFeature.js';
// import Overlap from './Overlap.js';
// import './SpeedDial.js';
// import { SpeedDial } from '@mui/material';
import BasicSpeedDial from './SpeedDial.js'
import './icons/water.svg'
const Floor2 = () => {
  
  return (
    // entire page
    
    <div className='relative flex flex-col justify-between px-[0vh] h-[70vh] w-auto mt-[10vh] bg-white' >
      
      {/* upper row */}
      <div className='flex h-[41vh] text-xl bg-white'>
     
        {/* KS-205 */}
        {/* <HoverFeature> */}
        <button className='relative ml-[2vh] w-[45vh] flex bg-white border-[.75vh] border-black text-black'>
          {/* 205- DOOR */}
          {/* <div className="overlap"></div> */}
          <div className='mt-[30vh] ml-[1vh] bg-door'><div className='mt-[2vh]'>Door</div></div>
          {/* 205-WINDOWS */}
          <div className='ml-[2vh] w-[14vh] mt-[35.5vh] h-[4vh] border-black border-[.5vh] border-b-[0vh]'></div>
         
          <div className='ml-[2vh] mt-[35.5vh] h-[4vh] w-[14vh] border-[.5vh] border-black border-b-[0vh]'></div>
          {/* class number plate */}
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[43.5vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[5vh]'>KS-205</div>
            <svg><water/></svg>
          </div>
        </button>
        {/* </HoverFeature> */}
        {/* KS - 206 */}
        <button className='relative w-[45vh] ml-[4vh] flex justify-between  bg-white border-black border-[.75vh] text-white'>
          {/* door */}
          <div className='mt-[30vh] ml-[1vh] bg-door'><div className='mt-[2vh]'>Door</div></div>
          {/* windows */}
          <div className='mr-[0vh] w-[14vh] mt-[35.5vh] h-[4vh] border-black border-[.5vh] border-b-[0vh]'></div>
          <div className='ml-[.75vh] mr-[1vh] mt-[35.5vh] h-[4vh] w-[14vh] border-[.5vh] border-black border-b-[0vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[43.5vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className="mt-[4vh]">KS-206</div>
          </div>
        </button>

        <button className='relative flex w-[45vh] ml-[4vh] justify-between border-[.75vh] border-black bg-white text-white'>
          <div className='mt-[35.5vh] ml-[5vh]   border-black border-[.5vh] w-[18vh] border-b-[0vh]'></div>
          <div className='mt-[30vh] mr-[2vh] w-[7vh] bg-door'></div>
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[43.5vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-201</div>
          </div>
        </button>

        <button className='relative flex w-[40vh] ml-[4vh] justify-between border-black border-[.75vh] bg-white text-white'>
          <div className='mt-[30vh] px-[4vh] ml-[2vh] bg-door'></div>
          <div className='bg-staff_bg absolute text-center bottom-[13vh] left-[8vh] w-[38.5vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-AR/VR</div>
          </div>
        </button>

        <button className='relative flex w-[20vh] ml-[4vh] mr-[2vh] bg-black h-[10vh] text-white'>
          
        </button>

      </div>
      
      
      <div className='flex relative h-[48vh] mt-[8vh] text-xl justify-between bg-white'>
        <button className='relative ml-[2vh] w-[45vh] flex bg-white text-white border-black h-[40vh] border-[.75vh]'>
          <div className='mb-[30vh] ml-[1vh] bg-door'><div className='mt-[1vh]'>Door</div></div>
          <div className='ml-[2vh] mb-[42vh] border-t-[0vh]  border-[.5vh]  h-[4vh] w-[13vh] border-black'></div>
          <div className=' ml-[2.5vh] mb-[10vh] mr-[1vh] border-black border-t-[0vh] border-[.5vh] w-[15vh] h-[4vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[8vh] left-[8vh] w-[43.75vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-204</div>
          </div>
        </button>
        <button className='relative ml-[2vh] w-[45vh] border-[.75vh] border-black flex bg-white text-white'>
          <div className='mb-[30vh] ml-[1vh]  bg-door'><div className='mt-[1vh]'>Door</div></div>
          <div className='h-[4vh] ml-[3vh] border-black border-t-[0vh] border-[.5vh] w-[15vh]'></div>
          <div className='h-[4vh] ml-[2vh] w-[14vh] border-black border-[.5vh] border-t-[0vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[8vh] left-[8vh] w-[43.75vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-203</div>
          </div>
        </button>

        {/* Network server */}
        
        <button className='relative ml-[2vh] w-[45vh] border-black border-[.75vh] flex bg-white text-white Feature'>
          {/* window */}
          <div className='mb-[30vh] h-[4vh] border-t-[0vh] border-[.5vh] w-[15vh] border-black ml-[4vh] '></div>
          {/* door */}
          <div className='mb-[30vh] ml-[15vh] w-[7vh] bg-door'></div>
          <div className='absolute text-3xl top-[13vh] translate-x-[13.5vh] ml-[-13.5vh] w-[43.7vh] h-[18vh]  text-black bg-staff_bg font-bold'>
           <div className='text-center align-text-bottom text-white  ml-[4vh]'><div className='mt-[3vh]'>KS-202
           <div className='text-2xl'>(Network Server)</div></div></div>
          </div>
        </button>
          <button className='relative mx-[12vh] left-[2vh] flex mt-[27vh] justify-between rounded-full bg-divs'>
          <div className='ml-[2vh] mt-[4vh] text-black font-bold'>Water</div>
          </button>
          <button className='relative flex w-[10vh] mt-[30vh] mr-[20vh] bg-white text-black'>
         
       
          <button className='absolute bottom-[2vh] left-[5vh] -translate-x-[2vh] font-bold'>
            Lift
          </button>
        </button>
    </div>
    <div className='mr-[2vh] mt-[-60vh]'> <BasicSpeedDial/></div>
    </div>
    
  );
};  

export default Floor2;
