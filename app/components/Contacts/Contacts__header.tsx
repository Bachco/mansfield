import React from 'react'
import { HiMail } from "react-icons/hi"
import { FaPhoneFlip } from "react-icons/fa6"
import { contacts } from '@/app/api/data'
import { removeSpaces } from '@/app/api/functions'

const Contacts__header = () => {
  return (
    <div className='w-full justify-end text-white items-center gap-4 md:flex hidden'>
        <div className="h-full flex gap-3">
            <HiMail className='text-primary text-lg'/>
            <div>
                <h5 className='font-barlow text-[18px] mb-3 leading-none font-semibold'>Email Address</h5>
                <a className='text-[14px] leading-none transition-colors duration-200 text-[#a9b2c7] hover:text-primary tracking-[0]' href="mailto: info@info.com">{contacts.mail}</a>
            </div>
        </div>
        <div className="h-full flex gap-3">
            <FaPhoneFlip className='text-primary text-lg'/>
            <div>
                <h5 className='font-barlow text-[18px] mb-3 leading-none font-semibold'>Phone Number</h5>
                <a className='text-[14px] leading-none transition-colors duration-200 text-[#a9b2c7] hover:text-primary tracking-[0]' href={`tel:${contacts.phone && removeSpaces(contacts.phone)}`}>{contacts.phone}</a>
            </div>
        </div>
        <div className="h-full"></div>
    </div>
  )
}

export default Contacts__header