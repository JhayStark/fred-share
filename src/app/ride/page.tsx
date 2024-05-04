'use client';
import React, { useState } from 'react';
import Account from '@/components/Account';
import LocationBar from '@/components/LocationBar';
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import {
  BadgeCent,
  Clock,
  Footprints,
  Hourglass,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import { CheckBoxFilter, SortBy } from '@/components/filter-components';
import RideCard from '@/components/RideCard';

const Page = () => {
  const [rides, setRides] = useState(true);
  return (
    <div>
      <div className='border-b-[1px] pb-4'>
        <Account />
        <LocationBar stateSetter={setRides} />
      </div>
      <div className='bg-[#F6F8F9] min-h-[calc(100vh-8.6rem)] px-5 md:px-0 '>
        <div className=' max-w-7xl mx-auto grid grid-cols-7 gap-x-10 py-8 '>
          <div className='md:block col-span-2 hidden '>
            {!rides && (
              <p className='text-[#054652] text-xl'>No filters available</p>
            )}
            {rides && (
              <div>
                <div className=''>
                  <div className='flex items-center justify-between px-6'>
                    <p className='text-[#054652]'>Sort by</p>
                    <p role='button' className='text-primary'>
                      Clear all
                    </p>
                  </div>

                  <RadioGroup
                    defaultValue=''
                    className='py-2 border-[#EDEDED] border-b-8'
                  >
                    <SortBy
                      icon={<Clock />}
                      label='Earliest Depature'
                      value='earliest'
                    />
                    <SortBy
                      icon={<BadgeCent />}
                      label='Lowest price'
                      value='lowestPrice'
                    />
                    <SortBy
                      icon={<Footprints className='text-green-600' />}
                      label='Close to depature point'
                      value='closeToDepature'
                    />
                    <SortBy
                      icon={<Footprints className='text-green-600' />}
                      label='Close to arrival point'
                      value='closeToArrival'
                    />
                    <SortBy
                      icon={<Hourglass />}
                      label='Shortest ride'
                      value='shortestRide'
                    />
                  </RadioGroup>
                  <div className='py-2 border-[#EDEDED] border-b-8'>
                    <p className='px-6 text-[#054652] text-xl'>Depature Time</p>
                    <CheckBoxFilter label='Before 06:00' value='before6' />
                    <CheckBoxFilter label='06:00 - 12:00' value='before6' />
                    <CheckBoxFilter label='12:01 - 18:00' value='before6' />
                    <CheckBoxFilter label='After 18:00' value='before6' />
                  </div>
                  <div className='py-2 border-[#EDEDED] border-b-8'>
                    <p className='px-6 text-[#054652] text-xl'>
                      Trust and safety
                    </p>
                    <CheckBoxFilter
                      label='Verified Profile'
                      value='verified'
                      icon={<ShieldCheck className='text-primary' />}
                    />
                  </div>
                  <div className='py-2 border-[#EDEDED] border-b-8'>
                    <p className='px-6 text-[#054652] text-xl'>Amenities</p>
                    <CheckBoxFilter
                      label='Max. 2 in the back'
                      value='Max. 2 in the back'
                      icon={<Users />}
                    />
                    <CheckBoxFilter
                      label='Instant Booking'
                      value='Instant Booking'
                      icon={<Zap />}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='md:col-span-5 col-span-7 '>
            {!rides && (
              <div className='h-80 space-y-2 w-full  text-[#054652]'>
                <p className='font-medium text-xl '>Today</p>
                <div className='py-8 w-full'>
                  <p className=' text-4xl text-center  max-w-[769px]'>
                    There are no rides yet for today between these locations
                  </p>
                  <p className='max-w-[769px] text-center text-muted-foreground pt-5'>
                    Paris, France → Mondsee, Austria
                  </p>
                </div>
                <Button className='rounded-full'>Create a ride alert</Button>
              </div>
            )}
            {rides && (
              <div>
                <p className='text-[#054652] text-xl pb-4'>Today</p>
                <p className='text-muted-foreground text-sm'>
                  Location 1 → Destination 1:
                </p>
                <p className='text-muted-foreground text-sm'>
                  1 rides available
                </p>
                <div className='py-3'>
                  <RideCard />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
