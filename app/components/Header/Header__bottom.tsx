import React from 'react'
import Nav from '../Nav/Nav'
import ContainerWrap from '../ContainerWrap/ContainerWrap'
import Socials__header from '../Socials/Socials__header'

const Header__bottom = () => {

  return (
    <div className='relative z-10 md:block hidden bg-white'>
        <ContainerWrap>
          <div className="flex justify-between z-[2]">
            <Nav />
            <Socials__header />
          </div>

        </ContainerWrap>
        <span className='lg:w-[25%] w-[30%] absolute h-[80px] bottom-0 -right-10 bg-primary -z-10 
      skew-x-[24deg]' />
    </div>
  )
}

export default Header__bottom