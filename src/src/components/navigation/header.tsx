"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className='z-50 fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-900 bg-neutral-900/50 p-2 text-sm text-neutral-500'>
      <Link href='/'>
        <Image
          src='/next.svg'
          width={24}
          height={24}
          alt='logo'
          className='pl-2 [&_path]:fill-white'
        />
      </Link>

      <nav className='space-x-3 [&_a]:p-2'>
        <Link href='#'>About</Link>
        <Link href='#'>Pricing</Link>
        <Link href='/dashboard'>Demo</Link>
      </nav>

      <Button>Join waitlist</Button>
    </header>
  );
}
