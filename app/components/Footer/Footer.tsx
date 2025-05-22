import React, { FC } from 'react'
import ContainerWrap from '../ContainerWrap/ContainerWrap'
import LogoFooter from '../Logo/LogoFooter'

const Footer: FC = () => {
  return (
    <footer className=''>
      <ContainerWrap>
          <div className='py-2 md:py-4'>
            <LogoFooter />
          </div>
      </ContainerWrap>
    </footer>
  )
}

export default Footer