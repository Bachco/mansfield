'use client'

import { usePathname } from 'next/navigation';
import { WraperProps } from '@/app/api/interfaces';
import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import Transition__page from './Transition__page';

const TransitionWrap: FC<WraperProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
        <Transition__page key={pathname} />
        <React.Fragment>{children}</React.Fragment>
    </AnimatePresence>
  );
};

export default TransitionWrap;
