import React from 'react'
import Logo from '../Logo/Logo'
import ContainerWrap from '../ContainerWrap/ContainerWrap'
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';


const Header__top = () => {
  return (
    <div className='header__top bg-black relative text-primary'>
      <ContainerWrap>
        <div className="flex justify-center items-center">
          <Logo />
          <Link href={"https://www.instagram.com/"} target='_blank' >
            <FiInstagram className='text-4xl absolute top-16 right-16'/>
          </Link>
        </div>
      </ContainerWrap>
    </div>
  )
}

export default Header__top