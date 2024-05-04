'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { Button } from './ui/button';
import { ComboFormField } from './form-fields';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CircleMinus, CirclePlus } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const FormSchema = z.object({
  pickup: z.string({
    required_error: 'Please select a language.',
  }),
});

const LocationBar = ({ stateSetter }: { stateSetter: any }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [dataToLoop, setDataToLoop] = useState([
    { label: 'Location 1', value: 'en' },
    { label: 'Location 2', value: 'fr' },
    { label: 'Location 3', value: 'de' },
    { label: 'Location 4', value: 'es' },
  ]);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }
  return (
    <div>
      <div className='mx-auto max-w-7xl p-1 rounded-2xl bg-white shadow-xl hidden md:flex items-center'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-full items-center divide-x-[1px] gap-x-1'
          >
            <ComboFormField
              form={form}
              dataToLoop={dataToLoop}
              label='Select pickup location'
              name='pickup'
            />
            <ComboFormField
              form={form}
              dataToLoop={dataToLoop}
              label='Select destination'
              name='destination'
            />
            <Popover>
              <PopoverTrigger className='flex pl-1 w-full h-full text-muted-foreground'>
                Today
              </PopoverTrigger>
              <PopoverContent className='  w-full  items-center justify-center'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  className=''
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger className=' pl-1 flex w-full h-full text-muted-foreground'>
                Passengers
              </PopoverTrigger>
              <PopoverContent className='flex items-center justify-between'>
                <h2 className=''>Passenger</h2>
                <div className='flex items-center gap-x-4'>
                  <CircleMinus />
                  <p>1</p>
                  <CirclePlus />
                </div>
              </PopoverContent>
            </Popover>
            <Button
              type='button'
              className='w-full hover:bg-primary hover:opacity-60'
              onClick={() => stateSetter((prev: any) => !prev)}
            >
              Search
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LocationBar;
