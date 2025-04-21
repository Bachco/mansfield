import React from 'react'
import Title from '../Title/Title'
import { DataProps, ElementProps } from '@/app/api/interfaces'
import Image from 'next/image'
import Content from '../Content/Content'
import Button__Simple from '../Button/Button__simple'

const Element__withImage: React.FC<DataProps<ElementProps>> = ({ data = {} as ElementProps }) => {
  const { title, content, image, link, linkString } = data;

  return (
    <section className='md:py-32 py-16'>
      <div className='flex gap-10 w-full md:flex-nowrap flex-wrap'>
        <div
          className='w-full md:w-1/2 px-5 box-border'
        >
          {
            image && (
              <Image
                src={`${image}`}
                width={557}
                height={598}
                alt=''
                className='w-full max-w-[557] h-auto mx-auto'
              />
            )
          }
        </div>
        <div
          className='w-full md:w-1/2 px-5 box-border text-center md:text-left'
        >
          <Title data={title} />
          {content && <Content content={content} />}
          {link && (<Button__Simple data={{ link, title: linkString }}/>)}
        </div>
      </div>
    </section>

  )
}

export default Element__withImage