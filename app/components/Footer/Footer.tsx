import React, { FC } from 'react'
import ContainerWrap from '../ContainerWrap/ContainerWrap'
import Link from 'next/link'
import LogoFooter from '../Logo/LogoFooter'

const Footer: FC = () => {
  return (
    <footer className='bg-secondary relative 
    before:content-[""] before:absolute lg:before:w-[25%] md:before:w-[30%] before:w-[250px] before:min-w-[250px] before:h-full  sm:before:-left-[22px] before:-left-[35px] before:bg-primary before:-z-10 z-10 before:skew-x-[-24deg] sm:before:block before:hidden'>
      <ContainerWrap>
        <div className="flex justify-between items-center sm:gap-0 gap-2 sm:flex-row flex-col">
          <div className='py-2 w-[120px] md:py-4'>
            <LogoFooter />
          </div>
          <div className="sm:basis-[calc(100%-180px)] sm:w-[calc(100%-180px)] basis-full w-full flex justify-between md:items-center sm:items-end items-center py-2 text-white text-center 2xl:pl-40 lg:pl-24 md:pl-12 pl-4 gap-2 md:flex-row flex-col text-sm">
            <p>© 2023 <strong>BW-welding s.r.o.</strong>  |  <Link href={'/'}>Cookies</Link> </p>
            <p> Tvorba web stránky: <Link href={'https://www.jozefbachorik.com/'} className='font-semibold'>Jozef Bachorík</Link></p>
          </div>
        </div>
      </ContainerWrap>
    </footer>
  )
}

export default Footer