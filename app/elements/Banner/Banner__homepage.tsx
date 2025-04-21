'use client'

import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import './sass/Banner_homepage.sass'
import { motion, AnimatePresence } from "framer-motion"
import { fadeIn } from '../../variants'
import ContainerWrap__narrow from '@/app/components/ContainerWrap/ContainerWrap__narrow'
import Button from '@/app/components/Button/Button'
import { BannerData } from '@/app/api/data'

const Banner__homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const settings = {
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    zoom: true,
    beforeChange: (oldIndex:number, newIndex:number) => setCurrentSlide(newIndex),
  };

  return (
    <div className='banner__homepage'>
      <Slider {...settings}>
        {BannerData.items.map((item, index) => (
          <div key={index} className='relative'>
            <div className='after:absolute relative after:top-0 after:left-0 after:w-full after:bottom-0 after:bg-gradient-to-r after:from-[#0d0438] 
            md:mx-0 sm:-mx-20 -mx-60'>
              <Image
                src={item.src}
                width={1920}
                height={900}
                alt=''
              />
            </div>

            <div className='absolute top-1/2 -translate-y-1/2 w-full banner__homepage-content text-white'>
              <ContainerWrap__narrow>
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <>
                      <motion.h1
                        className='font-barlow font-semibold xl:text-[100px] lg:text-6xl md:text-4xl text-2xl lg:leading-[110px] '
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        key={`title-${index}`}
                      >
                        {item.subTitle && <span className='block text-lg mb-4'>{item.subTitle}</span>}{item.title}
                      </motion.h1>
                      {item.content && (
                        <motion.p
                          className='mt-5'
                          variants={fadeIn("right", 0.4)}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          key={`content-${index}`}
                        >
                          {item.content}
                        </motion.p>
                      )}
                      {item.link && (
                        <motion.div
                          className='mt-5'
                          variants={fadeIn("right", 0.6)}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          key={`link-${index}`}
                        >
                          <Button data={{ title: item.linkTitle, link: item.link, buttonClass: "" }} />
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </ContainerWrap__narrow>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Banner__homepage
