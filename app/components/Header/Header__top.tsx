import React from 'react'
import Logo from '../Logo/Logo'
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';
import ContainerWrap__narrow from '../ContainerWrap/ContainerWrap__narrow';


const Header__top = () => {
  return (
    <div className='header__top bg-black relative text-primary'>
      <ContainerWrap__narrow>
        <div className="flex md:justify-start justify-center items-center">
          <Logo />
          <Link href={"https://www.instagram.com/"} target='_blank' >
            <FiInstagram className='md:text-4xl text-2xl absolute top-1/2 -translate-y-1/2 2xl:right-40 right-8'/>
          </Link>
        </div>
      </ContainerWrap__narrow>
    </div>
  )
}

export default Header__top