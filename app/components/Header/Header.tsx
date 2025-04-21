'use client'
import React from 'react'
import Header__bottom from './Header__bottom'
import Header__top from './Header__top'
import Sticky from 'react-sticky-el/lib/basic-version'
import './sass/header.sass'
import Nav__mobile from '../Nav/Nav__mobile'
import Nav__burgerTrigger from '../Nav/Nav__burgerTrigger'

const Header = () => {
  return (
    <header className='w-full overflow-hidden shadow'>
      <Header__top />
    </header>
  )
}

export default Header