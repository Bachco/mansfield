import { WraperProps } from '@/app/api/interfaces'
import React from 'react'

const ContainerWrap__narrow: React.FC<WraperProps> = ({children, customClass = ""}) => {
  return (
    <div className={`container mx-auto 2xl:px-40 px-8 ${customClass}`}>
        {children}
    </div>
  ) 
}

export default ContainerWrap__narrow