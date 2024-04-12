import React from 'react';

const window = () => {
  return (
    <div>
      <div className='absolute flex gap-6 top-0 ml-[4vh]'>
        <div className='bg-div w-[6vw]'>.</div>
        <div className='bg-div w-[6vw]'>.</div>
      </div>
      <div className='absolute flex space-x-4 bottom-0 right-0 mr-[2vh]'>
        <div className='bg-div w-[6vw]'>.</div>
        <div className='bg-div w-[6vw]'>.</div>
      </div>
    </div>
  );
};

export default window;
