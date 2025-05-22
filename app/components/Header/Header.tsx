import React from 'react'
import Header__top from './Header__top'
import './sass/header.sass'

const Header = () => {
  return (
    <header className='w-full overflow-hidden shadow py-3'>
      <Header__top />
    </header>
  )
}

export default Header