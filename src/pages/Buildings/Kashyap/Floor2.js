import React from 'react';
import BasicSpeedDial from './SpeedDial.js'
import Map from './FloorFeature.js';
// import image from "../images/lift.svg"
import wc from "../images/water.svg"

const mouse = ()=>{
  return(
  <div className='bg-black text-white'>
    <h1>HELLO WORLD</h1>
  </div>
  )
}
const Floor2 = () => {
  
  return (
    // entire page
    
    <div className='relative flex flex-col justify-between h-1 mt-[10vh] bg-white md:flex flex-grow' >
      
      {/* upper row */}
      <div className='flex h-[41vh] text-xl bg-white'>
      
        {/* KS-205 */}
        <div className='relative ml-[2vh] w-[45vh] flex bg-white border-[.75vh] border-black text-black'>
          {/* 205- DOOR */}
          <div className='mt-[30vh] ml-[1vh] bg-door'><div className='mt-[2vh]'>Door</div></div>
          {/* 205-WINDOWS */}
          <div className='ml-[2vh] w-[14vh] mt-[35.5vh] h-[2vh] border-black border-[.5vh] border-b-[0vh]'></div>
         
          <div className='ml-[2vh] mt-[35.5vh] h-[4vh] w-[14vh] border-[.5vh] border-black border-b-[0vh]'></div>
          {/* class number plate */}
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[41.7vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[5vh]' onMouseOver={Map}>KS-205</div>
          </div>
        </div>
        {/* KS - 206 */}
        <div className='relative w-[45vh] ml-[4vh] flex justify-between  bg-white border-black border-[.75vh] text-white'>
          {/* door */}
          <div className='mt-[30vh] ml-[1vh] bg-door'><div className='mt-[2vh]'>Door</div></div>
          {/* windows */}
          <div className='mr-[0vh] w-[14vh] mt-[35.5vh] h-[4vh] border-black border-[.5vh] border-b-[0vh]'></div>
          <div className='ml-[.75vh] mr-[1vh] mt-[35.5vh] h-[4vh] w-[14vh] border-[.5vh] border-black border-b-[0vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[41.7vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className="mt-[4vh]">KS-206</div>
          </div>
        </div>

        <div className='relative flex w-[45vh] ml-[4vh] justify-between border-[.75vh] border-black bg-white text-white'>
          <div className='mt-[35.5vh] ml-[5vh]   border-black border-[.5vh] w-[18vh] border-b-[0vh]'></div>
          <div className='mt-[30vh] mr-[2vh] w-[7vh] bg-door'></div>
          <div className='bg-class_bg absolute text-center bottom-[13vh] left-[8vh] w-[41.7vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-201</div>
          </div>
        </div>

        <div className='relative flex w-[40vh] ml-[4vh] justify-between border-black border-[.75vh] bg-white text-white'>
          <div className='mt-[30vh] px-[4vh] ml-[2vh] bg-door'></div>
          <div className='bg-staff_bg absolute text-center bottom-[13vh] left-[8vh] w-[37vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-AR/VR</div>
          </div>
        </div>

        <div className='relative flex w-[20vh] ml-[4vh] mr-[2vh] bg-black h-[10vh] text-white'>
          
        </div>

      </div>
      
      
      <div className='flex relative h-[48vh] mt-[8vh] text-xl justify-between bg-white'>
        <div className='relative ml-[2vh] w-[45vh] flex bg-white text-white border-black h-[40vh] border-[.75vh]'>
          <div className='mb-[30vh] ml-[1vh] bg-door'><div className='mt-[1vh]'>Door</div></div>
          <div className='ml-[2vh] mb-[42vh] border-t-[0vh]  border-[.5vh]  h-[4vh] w-[13vh] border-black'></div>
          <div className=' ml-[2.5vh] mb-[10vh] mr-[1vh] border-black border-t-[0vh] border-[.5vh] w-[15vh] h-[4vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[8vh] left-[8vh] w-[42.9vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-204</div>
          </div>
        </div>
        <div className='relative ml-[2vh] w-[45vh] border-[.75vh] border-black flex bg-white text-white'>
          <div className='mb-[30vh] ml-[1vh]  bg-door'><div className='mt-[1vh]'>Door</div></div>
          <div className='h-[4vh] ml-[3vh] border-black border-t-[0vh] border-[.5vh] w-[15vh]'></div>
          <div className='h-[4vh] ml-[2vh] w-[14vh] border-black border-[.5vh] border-t-[0vh]'></div>
          <div className='bg-class_bg absolute text-center bottom-[8vh] left-[8vh] w-[42.9vh] h-[18vh] -translate-x-[8vh] text-white font-bold text-3xl'>
            <div className='mt-[4vh]'>KS-203</div>
          </div>
        </div>

        {/* Network server */}
        
        <div className='relative ml-[2vh] w-[45vh] border-black border-[.75vh] flex bg-white text-white Feature'>
          {/* window */}
          <div className='mb-[30vh] h-[4vh] border-t-[0vh] border-[.5vh] w-[15vh] border-black ml-[4vh] '></div>
          {/* door */}
          <div className='mb-[30vh] ml-[15vh] w-[7vh] bg-door'></div>
          <div className='absolute text-3xl top-[13vh] translate-x-[13.5vh] ml-[-13.5vh] w-[42.9vh] h-[18vh]  text-black bg-staff_bg font-bold'>
           <div className='text-center align-text-bottom text-white  ml-[4vh]'><div className='mt-[3vh]'>KS-202
           <div className='text-2xl'>(Network Server)</div></div></div>
          </div>
        </div>
          <div className='relative mx-[12vh] left-[2vh] flex mt-[27vh] justify-between rounded-full bg-divs'>
            
          <img className='ml-[2vh] text-black font-bold size-28' src={wc}/>
          </div>
          <div className='relative flex w-[10vh] mt-[30vh] mr-[20vh] bg-white text-black'>
         
       
        {/* <img className='absolute bottom-[1vh] left-[5vh] -translate-x-[2vh] font-bold size-24' src={image} */}
          
        </div>
    <div className='absolute right-5 bottom-2'> <BasicSpeedDial/></div>
    </div>
    </div>
    
  );
};  

export default Floor2;