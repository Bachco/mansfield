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
    <>
      <Sticky stickyClassName={'z-30 sticky-active'}>
        <header className='w-full overflow-hidden shadow'>
          <Header__top />
          <Header__bottom />
        </header>
      </Sticky>
      <div className="z-50 md:hidden">
        <Nav__mobile />
        <Nav__burgerTrigger />
      </div>
    </>
  )
}

export default Header