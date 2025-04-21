import React from 'react'
import Title from '../Title/Title'
import { ElementProps, ElementWrapPropsExtended } from '@/app/api/interfaces'
import Contacts__form from '../Contacts/Contacts__form'

const Element__withForm: React.FC<ElementWrapPropsExtended> = ({ data = {} as ElementProps, children }) => {
  const { title, content } = data;

  return (
    <section className='md:py-32 py-16'>
      <div className='flex gap-10 w-full md:flex-nowrap flex-wrap'>
        <div
          className='w-full md:w-1/2 xl:w-1/3 px-5 box-border'
        >
          {children}
        </div>
        <div
          className='w-full md:w-1/2 xl:w-2/3 px-5 box-border text-center md:text-left'
        >
          <Title data={title} />
          <Contacts__form />
        </div>
      </div>
    </section>

  )
}

export default Element__withForm