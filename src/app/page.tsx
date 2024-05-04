import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Link href='/ride'>
        <Button>Go to rides</Button>
      </Link>
    </div>
  );
};

export default Page;
