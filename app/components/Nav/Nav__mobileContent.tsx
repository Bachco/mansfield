import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navData } from '@/app/api/data';
import Styles from './sass/Nav__mobile.module.sass';
import { useAppDispatch } from '@/lib/hooks';
import { closeMenu } from '@/lib/features/burgerMenuSlice';

interface MobileContentProps {
    burgerMenuActive: boolean;
    motionVariants: any;
    listItemVariants: any;
}

const Nav__mobileContent: FC<MobileContentProps> = ({ burgerMenuActive, motionVariants, listItemVariants }) => {
    const dispatch = useAppDispatch();

    const handleLinkClick = () => {
        if (burgerMenuActive) {
            dispatch(closeMenu());
        }
    };

    return (
        <div className={Styles.content}>
            <motion.ul animate={burgerMenuActive ? 'open' : 'closed'} variants={motionVariants}>
                {navData.map((item, index) => (
                    <motion.li key={index} variants={listItemVariants}>
                        <Link href={item.path} onClick={handleLinkClick}>
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default Nav__mobileContent;
