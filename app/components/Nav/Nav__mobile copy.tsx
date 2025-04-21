/*
"use clieent"
import React, { useState } from 'react'
import Styles from "./sass/Nav__mobile.module.sass"
import { motion } from "framer-motion"
import { navData } from '@/app/api/data'
import Link from 'next/link'

const Nav__mobile = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive)
  }

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "pring"
      }
    },
    close: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0
      }
    }
  }

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut"
      }
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0
      }
    }
  }

  return (
    <div className={`${Styles.navbar} ${burgerMenuActive && Styles.active}`}>
      <div className={Styles.navigation}>
        <button type='button' className={Styles.button}>learn more</button>
        <div className={Styles.burgerMenuContainer} onClick={() => toggleBurgerMenu()}>
          <div className={Styles.burgerMenuTrigger}></div>
          <div className={Styles.burgerMenu}></div>
        </div>
      </div>
      <div className={Styles.content}>
        <motion.ul
          animate={burgerMenuActive ? "open" : "closed"}
          variants={motionVariants}
        >
          {navData.map((item, index) => <motion.li
            key={index}
            variants={listItemVariants}
          >
            <Link href={item.path}>{item.name}</Link>
          </motion.li>)}
        </motion.ul>
      </div>
    </div>
  )
}

export default Nav__mobile
*/