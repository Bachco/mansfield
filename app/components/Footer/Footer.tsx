import React, { FC } from 'react'
import ContainerWrap from '../ContainerWrap/ContainerWrap'
import LogoFooter from '../Logo/LogoFooter'

const Footer: FC = () => {
  return (
    <footer className='bg-secondary relative s
    before:content-[""] before:absolute lg:before:w-[25%] md:before:w-[30%] before:w-[250px] before:min-w-[250px] before:h-full  sm:before:-left-[22px] before:-left-[35px] before:bg-primary before:-z-10 z-10 before:skew-x-[-24deg] sm:before:block before:hidden'>
      <ContainerWrap>
        <div className="flex justify-between items-center sm:gap-0 gap-2 sm:flex-row flex-col">
          <div className='py-2 w-[120px] md:py-4'>
            <LogoFooter />
          </div>
        </div>
      </ContainerWrap>
    </footer>
  )
}

export default Footer