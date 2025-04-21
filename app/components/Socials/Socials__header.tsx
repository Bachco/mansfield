import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaTwitter } from 'react-icons/fa6';


const Socials__header = () => {
    return (
        <div className='flex gap-6 items-center'>
            <Link
                href={'https://www.facebook.com/'}
                className='text-white hover:text-black transition-colors'
            >
                <FaFacebookF />
            </Link>
            <Link
                href={'https://www.instagram.com/'}
                className='text-white hover:text-black transition-colors'
            >
                <FaInstagram />
            </Link>
            <Link
                href={'https://www.twitter.com/'}
                className='text-white hover:text-black transition-colors'
            >
                <FaTwitter />
            </Link>
        </div>
    )
}

export default Socials__header