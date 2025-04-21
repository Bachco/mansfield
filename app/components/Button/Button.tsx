import { DataProps } from '@/app/api/interfaces';
import React from 'react'

interface ButtonProps {
    title?: string;
    link: string;
    buttonClass?: string;
}

const Button:React.FC<DataProps<ButtonProps>> = ({data}) => {
  return (
    <a href={data?.link} className={`text-white  font-rubik text-sm inline-block font-medium group relative z-10 ${data?.buttonClass}`}>
        <span className='bg-primary p-6 min-w-52 text-center inline-block z-10 group-hover:bg-white group-hover:text-primary transition-all duration-500'>
            {
                data?.title
            }
        </span>
        <span className='absolute bg-white top-2 left-2 w-full h-full -z-10 transition-all group-hover:bg-primary duration-500' />
    </a>
  )
}

export default Button