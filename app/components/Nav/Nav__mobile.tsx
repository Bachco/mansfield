import React from 'react';
import Styles from './sass/Nav__mobile.module.sass';
import { Variants } from 'framer-motion';
import Nav__mobileContent from './Nav__mobileContent';
import { useAppSelector } from '@/lib/hooks';
import { selectBurgerMenuIsOpen } from '@/lib/features/burgerMenuSlice';

const Nav__mobile: React.FC = () => {
  const burgerMenuActive = useAppSelector(selectBurgerMenuIsOpen);

  const motionVariants: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: 'easeOut',
        type: 'spring',
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0,
      },
    },
  };

  const listItemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div className={`${Styles.navbar} ${burgerMenuActive && Styles.active}`}>
      <Nav__mobileContent
        burgerMenuActive={burgerMenuActive}
        motionVariants={motionVariants}
        listItemVariants={listItemVariants}
      />
    </div>
  );
};

export default Nav__mobile;
