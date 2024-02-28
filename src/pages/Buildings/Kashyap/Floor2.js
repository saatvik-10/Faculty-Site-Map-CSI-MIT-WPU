import React from 'react';

const Floor2 = () => {
  return (
    <div className='relative pb-60 px-0 mx-10 w-auto mt-32 bg-brownRgb'>
        <div className='flex justify-between'>
        <div className='relative w-3/12 flex bg-divs h-24 text-white'>
          <div className='mb-12 px-5 bg-door'>Door</div>
          <div className='ml-3 mb-16 px-14 bg-win'>Window</div>
          <div className='mr-0 ml-auto mb-16 px-14 bg-win'>Window</div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-205</div>
        
        </div>
       
        
       
        <div className='relative w-3/12 -ml-14 flex justify-between bg-divs h-24 text-white'>
          <div className='mb-12 px-5 bg-door'>Door</div>
          <div className='mb-16 px-16 bg-win'>Window</div>
          <div className='mb-16 px-16 bg-win'>Window</div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-206</div>
        </div>
        
     
        
        
        <div className='relative flex w-2/12 -mr-14 justify-between bg-divs h-24 text-white'>
          <div className='mb-16 px-16 bg-win'>Window</div>
          <div className='mb-12 px-5 bg-door'>Door</div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-201</div>
          
          </div>

        <div className='relative flex w-1/6 -ml-8 bg-divs h-16 text-white'>
          <div className='bg-st1 h-full w-1/2'></div>
          <div className='bg-st2 h-full w-1/2'></div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 font-bold'>Stairs</div>
        </div>
        </div>
        <div className='flex justify-between'>
        <div className='absolute bottom-0 w-3/12 flex bg-divs h-24 text-white'>
          <div className='mt-12 px-5 bg-door'>Door</div>
          <div className='ml-3 mt-16 px-14 bg-win'>Window</div>
          <div className='mr-0 ml-auto mt-16 px-14 bg-win'>Window</div>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-204</div>
        
        </div>
          <div className='absolute left-80 bottom-0 w-3/12 ml-60 flex justify-between bg-divs h-24 text-white'>
          <div className='mt-12 px-5 bg-door'>Door</div>
          <div className='mt-16 px-16 bg-win'>Window</div>
          <div className='mt-16 px-16 bg-win'>Window</div>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-203</div>
        </div>
        {/* <div className='absloute bottom-0 flex w-2/12 justify-between bg-divs h-24 text-white'>
          <div className='mb-16 px-16 bg-win'>Window</div>
          <div className='mb-12 px-5 bg-door'>Door</div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-black font-bold'>KS-201</div>
          
          </div> */}
          </div>

      </div>


  );
};

export default Floor2;
