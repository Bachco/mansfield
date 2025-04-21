import React from 'react'
import Logo from '../Logo/Logo'
import Contacts__header from '../Contacts/Contacts__header'
import ContainerWrap from '../ContainerWrap/ContainerWrap'

const Header__top = () => {
  return (
    <div className='header__top bg-secondary relative before:content-[""] before:absolute lg:before:w-[28.85%] md:before:w-[35%] before:w-[50%] before:min-w-[250px] before:h-full before:bg-primary before:-z-10 z-10 before:skew-x-[-24deg] before:-left-[22px]'>
      <ContainerWrap>
        <div className="flex justify-between items-center">
          <div className='basis-[180px] w-[180px]'>
          <Logo />
          </div>
          <div className="basis-[calc(100%-180px)] w-[calc(100%-180px)] flex justify-center items-center py-2">
            <Contacts__header />
          </div>
        </div>
      </ContainerWrap>
    </div>
  )
}

export default Header__top