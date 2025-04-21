import { WraperProps } from '@/app/api/interfaces'
import React from 'react'

const ContainerWrap:React.FC<WraperProps> = ({children, customClass=""}) => {
  return (
    <div className={`container mx-auto md:px-4 px-8 relative ${customClass}`}>
        {children}
    </div>
  ) 
}

export default ContainerWrap