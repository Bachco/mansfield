import { DataProps } from '@/app/api/interfaces';
import React from 'react'

interface ButtonProps {
    title?: string;
    link: string;
    buttonClass?: string;
}

const Button__Simple:React.FC<DataProps<ButtonProps>> = ({data}) => {
  return (
    <a href={data?.link} className={`text-white font-rubik text-sm inline-block font-medium group relative z-10 mt-4 ${data?.buttonClass}`}>
        <span className='bg-primary p-5 min-w-40 text-center inline-block z-10 group-hover:bg-secondary group-hover:text-white transition-all duration-500 text-sm uppercase'>
            {
                data?.title
            }
        </span>
    </a>
  )
}

export default Button__Simple