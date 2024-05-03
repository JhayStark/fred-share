import { ChevronDown, CirclePlus, User } from 'lucide-react';
import React from 'react';

const Account = () => {
  return (
    <div>
      <div className='h-[4.500rem] flex items-center justify-between max-w-[1272px] mx-auto'>
        <p className='text-primary text-xl'>Ride Share</p>
        <div className='flex items-center gap-x-2 text-primary'>
          <CirclePlus />
          <h2 className='font-medium text-sm'>Publish a ride</h2>

          <div
            role='button'
            className='bg-primary-foreground rounded-full p-1  flex items-center justify-center cursor-pointer'
          >
            <User className='text-xl' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
