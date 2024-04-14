import React from 'react';
import img1 from '../../images/stairs.svg';
import img2 from '../../images/lift.svg';
import BasicSpeedDial from '../../../pages/Buildings/Kashyap/SpeedDial';
import Dice from './dice';
import Window from './window';
import Staff from './staff';

const Class = (props) => {
  return (
    <div>
      <div className='bg-bg relative flex h-[100vh]'>
        <div className='bg-div relative w-full m-[9vh] rounded-xl'>
          <div className='flex m-[3vh] h-[35vh] flex-grow sm:flex-grow-0 md:flex-grow lg:flex-grow'>
            <div className='bg-div1 flex relative h-full mr-[20vh] p-[1vh] space-x-4 flex-grow sm:flex-grow-0 md:flex-grow lg:flex-grow'>
              <div className='bg-white flex items-center justify-between h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative'>
                <Dice />
                <Window />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-cls'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class1}
                </div>
              </div>

              <div className='bg-white flex items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative justify-between'>
                <Dice />
                <Window />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-cls'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class2}
                </div>
              </div>

              <div className='bg-white flex items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative justify-between'>
                <Dice />
                <Window />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-cls'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class3}
                </div>
              </div>

              <div className='bg-white flex justify-center items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative'>
                <Staff />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-stf'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class4}
                </div>
              </div>
            </div>

            <img src={img1} className='h-[15vh]' />
          </div>

          <div className='flex m-[3vh] h-[35vh]'>
            <div className='bg-div1 flex relative h-full mr-[44vh] p-[1vh] space-x-4 flex-grow sm:flex-grow-0 md:flex-grow lg:flex-grow'>
              <div className='bg-white flex items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative justify-between'>
                <Dice />
                <Window />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-cls'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class5}
                </div>
              </div>

              <div className='bg-white flex items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative justify-between'>
                <Dice />
                <Window />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-cls'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class6}
                </div>
              </div>

              <div className='bg-white flex justify-center items-center h-full w-full sm:w-6/12 md:w-4/12 lg:w-4/12 relative '>
                <Staff />
                <div className='w-full h-full left-0 top-0 absolute hover:bg-stf'></div>
                <div className='absolute text-center left-0 right-0 font-bold text-4xl z-50'>
                  {props.class7}
                </div>
              </div>
            </div>

            <img
              src={img2}
              className='absolute h-[16vh] right-[20vh] bottom-[6vh]'
            />

            <div className='realtive right-0'>
              <BasicSpeedDial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
