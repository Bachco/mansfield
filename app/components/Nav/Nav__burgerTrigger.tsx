import React, { FC } from 'react';
import Styles from "./sass/Nav__burgerTrigger.module.sass";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectBurgerMenuIsOpen, toggle } from '@/lib/features/burgerMenuSlice';

const Nav__burgerTrigger: FC = () => {
    const dispatch = useAppDispatch();

    const burgerMenuActive = useAppSelector(selectBurgerMenuIsOpen);

    const handleClick = () => {
        dispatch(toggle());
    };

    return (
        <div className={`${Styles.burgerMenuContainer} ${burgerMenuActive && Styles.active}`} onClick={handleClick}>
            <div className={Styles.burgerMenuTrigger}></div>
            <div className={Styles.burgerMenu}></div>
        </div>
    );
};

export default Nav__burgerTrigger;
