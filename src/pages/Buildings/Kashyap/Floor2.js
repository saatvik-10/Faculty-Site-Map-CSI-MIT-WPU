import React from 'react';

const Floor2 = () => {
  
  return (
    <div className='relative flex flex-col justify-between px-0 h-[80vh] w-auto mt-32 bg-brownRgb' >
      <div className='flex mb-60 h-[26vh] text-xl justify-between'>
        <div className='relative w-3/12 flex bg-divs text-white'>
          <div className='mt-48 px-5 c bg-door'><div className='mt-3'>Door</div></div>
          <div className='ml-3 mb-48 border-b-4 px-14 bg-win'><div className='mt-3'>Window</div></div>
          <div className='mr-0 ml-auto mb-48 border-b-4 px-14 bg-win'><div className='mt-3'>Window</div></div>
          <div className='absolute bottom-1/3 left-1/2 -translate-x-1/2 text-black font-bold text-3xl'>
            KS-205
          </div>
        </div>

        <div className='relative w-3/12 -ml-14 flex justify-between bg-divs text-white'>
          <div className='mt-48 px-5 border-b-4 bg-door'><div className='mt-3'>Door</div></div>
          <div className='mb-48 px-14 border-b-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='mb-48 px-14 border-b-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='absolute bottom-1/3 left-1/2 text-3xl -translate-x-1/2 text-black font-bold'>
            KS-206
          </div>
        </div>

        <div className='relative flex w-2/12 -mr-14 justify-between bg-divs text-white'>
          <div className='mb-48 px-16 border-b-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='mt-48 px-5 border-b-4 bg-door'><div className='mt-3'>Door</div></div>
          <div className='absolute bottom-1/3 text-3xl left-1/2 -translate-x-1/2 text-black font-bold'>
            KS-201
          </div>
        </div>

        <div className='relative flex w-1/6 -ml-8 bg-divs h-16 text-white'>
          <div className='bg-st1 h-full w-1/2'></div>
          <div className='bg-st2 h-full w-1/2'></div>
          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 font-bold'>
            Stairs
          </div>
        </div>
      </div>
      <div className='flex relative h-[26vh] text-xl justify-between'>
        <div className='relative w-3/12 flex bg-divs text-white'>
          <div className='mb-48 px-5 border-t-4 bg-door'><div className='mt-3'>Door</div></div>
          <div className='ml-3 mt-48 px-14 border-t-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='mr-0 ml-auto mt-48 px-14 border-t-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='absolute top-1/3 text-3xl left-1/2 -translate-x-1/2 text-black font-bold'>
            KS-204
          </div>
        </div>
        <div className='relative ml-16 -mr-2 w-3/12 flex justify-between bg-divs text-white'>
          <div className='mb-48 px-5 border-t-4 bg-door'><div className='mt-3'>Door</div></div>
          <div className='mt-48 px-14 border-t-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='mt-48 px-14 border-t-4 bg-win'><div className='mt-3'>Window</div></div>
          <div className='absolute top-1/3 text-3xl left-1/2 -translate-x-1/2 text-black font-bold'>
            KS-203
          </div>
        </div>
        <div className='relative right- flex w-2/12 justify-between bg-divs text-white'>
          <div className='mb-48 px-5 border-t-4 bg-doorns'><div className='mt-3'>Door</div></div>
          <div className='mt-48 px-16 border-t-4 bg-winns'><div className='mt-3'>Window</div></div>
          <div className='absolute text-3xl top-1/3 translate-x-1/2 ml-5 text-black font-bold'>
          KS-202 <div className='text-xl'>(Network Server)</div>
          </div>
        </div>
          <div className='relative mx-20 left-10 flex w-24 mt-36 justify-between rounded-full bg-divs'>
          <div className='ml-5 mt-10 text-black font-bold'>Water</div>
          </div>
          <div className='relative flex w-1/12 mt-48 mr-8 bg-st2 text-white'>
         
          <div className='bg-st2'></div>
          <div className='absolute bottom-1/4 left-1/2 -translate-x-1/2 font-bold'>
            Lift
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Floor2;
