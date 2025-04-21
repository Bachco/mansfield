import { WraperProps } from '@/app/api/interfaces'
import React from 'react'

const ContainerWrap__wide:React.FC<WraperProps> = ({children, customClass=""}) => {
  return (
    <div className={`w-full mx-auto overflow-hidden ${customClass}`}>
        {children}
    </div>
  ) 
}

export default ContainerWrap__wide