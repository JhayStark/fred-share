import { User, Users, Zap } from 'lucide-react';
import React from 'react';

const RideCard = () => {
  return (
    <div className='bg-[#FFF] shadow-lg rounded-2xl space-y-5 p-4'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center justify-center h-20 '>
          <div className='flex items-center flex-col text-end justify-between  h-full'>
            <div>
              <p className='text-sm text-[#054652] font-medium'>09:30</p>
              <p className='text-[#6F8B90] text-sm'>4h30m</p>
            </div>
            <p className='text-sm text-[#054652] font-medium'>14:00</p>
          </div>
          <div className='px-3'>
            <div className='bg-white rounded-full h-2 w-2 border-2 border-[#054652]'></div>
            <div className='flex justify-center pt-13 pb-0 '>
              <div className='bg-[#054652] flex-shrink-0 h-12 w-[2px]'></div>
            </div>
            <div className='bg-white rounded-full h-2 w-2 border-2 border-[#054652]'></div>
          </div>
          <div className='h-full flex justify-between flex-col'>
            <div>
              <p className='text-sm font-medium text-[#054652]'>Pickup</p>
              <div className='flex items-center '>
                <Users size={15} />
                <Users size={15} />
                <Users size={15} />
              </div>
            </div>
            <div>
              <p className='text-sm font-medium text-[#054652]'>Destination</p>
              {/* <div className='flex items-center'>
                <Users size={15} />
                <Users size={15} />
                <Users size={15} />
              </div> */}
            </div>
          </div>
        </div>

        <p className='text-[#054652]'>GHS 60.00</p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-x-3'>
          <div className='bg-primary-foreground rounded-full h-12 w-12  flex items-center justify-center cursor-pointer'>
            <User className='text-xl' />
          </div>
          <p className='text-[#054652] text-sm'>Driver name</p>
        </div>
        <div className='text-muted-foreground flex items-center gap-x-3'>
          <Zap />
          <Users />
        </div>
      </div>
    </div>
  );
};

export default RideCard;
