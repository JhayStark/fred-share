'use client';

import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';

import { Checkbox } from '@/components/ui/checkbox';

export const SortBy = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => {
  return (
    <div className='flex items-center justify-between hover:bg-slate-200 cursor-pointer py-4 px-6 rounded-xl'>
      <div className='flex items-center gap-x-4'>
        <div className='text-[#708C91]'>{icon}</div>
        <Label htmlFor={value} className='text-[#054652] text-sm font-normal'>
          {label}
        </Label>
      </div>
      <RadioGroupItem value={value} id={value} />
    </div>
  );
};

export const CheckBoxFilter = ({
  label,
  value,
  icon,
  number = 0,
}: {
  label: string;
  value: string;
  icon?: any;
  number?: number;
}) => {
  return (
    <div className='flex items-center justify-between hover:bg-slate-200 cursor-pointer py-4 px-6 rounded-xl'>
      <div className='flex items-center gap-x-4'>
        {icon && <div className='text-[#708C91]'>{icon}</div>}
        <Label htmlFor={value} className='text-[#054652] text-sm font-normal'>
          {label}
        </Label>
      </div>
      <div className='flex items-center gap-x-3 '>
        <p className='text-[#6F8B90] text-sm'>{number}</p>
        <Checkbox value={value} id={value} />
      </div>
    </div>
  );
};
