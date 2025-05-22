'use client'
import React, { FC } from 'react'

const Map: FC = () => {
    return (
        <div className="relative aspect-[104/41]">
            <div className="absolute inset-0 z-0 overflow-hidden top-[5%] bottom-[5%] left-[2%] right-[2%] rounded-[4%]">
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7985167619713!2d18.555627675651635!3d49.22334807495514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471461056a1c3843%3A0x11401eea11f12d17!2sN%C3%A1mestie%20Slovenskej%20republiky%205%2F5%2C%20014%2001%20Byt%C4%8Da%2C%20Slovakia!5e0!3m2!1sen!2sch!4v1745662667568!5m2!1sen!2sch"
                    width="600"
                    height="400"
                    loading="lazy"
                    style={{ filter: ' invert(100%)', backgroundColor: '#000' }}
                ></iframe>

            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 1144 451" width="1144" height="451">
                    <title>MFK</title>
                    <path className='fill-black' d="m1102.4 6.5h-1060.3c0 19.6-15.8 35.5-35.4 35.5v366.7c19.6 0 35.4 15.9 35.4 35.5h1060.3c0-19.6 15.9-35.5 35.5-35.5v-366.7c-19.6 0-35.5-15.9-35.5-35.5zm17.8 384.5c-19.6 0-35.5 15.9-35.5 35.4h-1024.9c0-19.5-15.8-35.4-35.4-35.4v-331.3c19.6 0 35.4-15.9 35.4-35.4h1024.9c0 19.5 15.9 35.4 35.5 35.4z" />
                    <path className='fill-primary' d="m1108.4 450.1h-1072.2v-5.9c0-16.3-13.2-29.6-29.5-29.6h-5.9v-378.5h5.9c16.3 0 29.5-13.3 29.5-29.6v-5.9h1072.2v5.9c0 16.3 13.2 29.6 29.5 29.6h5.9v378.5h-5.9c-16.3 0-29.5 13.3-29.5 29.6zm-1060.8-11.9h1049.4c2.6-18 16.9-32.4 35-35v-355.7c-18.1-2.6-32.4-17-35-35.1h-1049.4c-2.6 18.1-16.9 32.5-35 35.1v355.7c18.1 2.6 32.4 17 35 35z" />
                    <path className='fill-primary' d="m1086.8 428.5h-1029v-2.1c0-18.3-15-33.3-33.4-33.3h-2.1v-335.5h2.1c18.4 0 33.4-14.9 33.4-33.3v-2.1h1029v2.1c0 18.4 15 33.3 33.4 33.3h2v335.5h-2c-18.4 0-33.4 15-33.4 33.3zm-1024.9-4.1h1020.8c1-19.1 16.3-34.4 35.4-35.4v-327.3c-19.1-1-34.4-16.3-35.4-35.3h-1020.8c-1.1 19-16.4 34.3-35.4 35.3v327.3c19 1 34.3 16.3 35.4 35.4z" />
                </svg>
            </div>
        </div>
    )
}

export default Map