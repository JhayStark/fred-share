'use client';

import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Button } from '../ui/button';

export const ComboFormField = ({
  form,
  dataToLoop,
  name,
  label = 'Select Item',
}: {
  form: any;
  dataToLoop: { label: string; value: string }[];
  name: string;
  label: string;
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col w-full'>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant='outline'
                  role='combobox'
                  className={cn(
                    'w-full  justify-between border-0',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? dataToLoop.find(item => item.value === field.value)?.label
                    : label}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder='Search item...' />
                <CommandEmpty>No item found.</CommandEmpty>
                <CommandGroup>
                  {dataToLoop.map(item => (
                    <CommandItem
                      value={item.label}
                      key={item.value}
                      onSelect={() => {
                        form.setValue(name, item.value);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          item.value === field.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};
