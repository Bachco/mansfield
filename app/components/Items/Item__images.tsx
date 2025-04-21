'use client'
import React, { FC, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage, { FitMode } from '../TestComponent/NextJsImage';
import { ItemProps } from '@/app/api/interfaces';

const Item__images: FC<ItemProps> = ({ title, images, content }) => {
    const [open, setOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Vložte len URL náhľadov do lightboxu a skutočné obrázky načítajte len v prípade potreby
    const slides = images && images.length > 0
        ? images.map(image => ({ src: image.link, width: 360, height: 280, lazy: true })) // Pridajte vlastnosť lazy
        : [{ src: "/images/Portfolio/6.jpg", width: 360, height: 280, lazy: true }];

    // Pri otvorení lightboxu načítajte plné obrázky
    const openLightbox = (index: number) => {
        setCurrentSlide(index);
        setOpen(true);
        // Tu načítajte skutočné obrázky, ak sú označené ako lazy
    };

    return (
        <>
            <div className='w-full sm:w-[calc((100%-28px)/2)] lg:w-[calc((100%-56px)/3)]'>
                <div className='flex justify-center relative group z-10 max-w-[360px] mx-auto items-center overflow-hidden'>
                    {
                        slides.map((image, index) => (
                            <div key={index} className={`cursor-pointer max-w-full ${index > 0 && "hidden"}`} onClick={() => openLightbox(index)}>
                                <NextJsImage
                                    slide={image}
                                    offset={index}
                                    rect={{ width: 360, height: 280 }}
                                    fitMode={FitMode.Cover} // Nastavíme fitMode napríklad na Cover
                                />
                            </div>
                        ))
                    }
                    <div className='after:bg-primary after:bg-opacity-80 after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:transition-all after:duration-500 after:group-hover:w-full after:-z-10
                 absolute text-left top-0 left-0 h-full w-full overflow-hidden transition-all duration-500 invisible group-hover:visible opacity-0 group-hover:opacity-100 z-10
                 text-white px-5 py-10 flex flex-col items-start justify-end pointer-events-none'>
                        {content && <p className='text-xs leading-none mb-2 text-white font-medium group-hover:pl-5 transition-all duration-500'>{content}</p>}
                        <h3 className='pl-0 group-hover:pl-5 transition-all duration-700 font-barlow text-2xl leading-7 uppercase font-semibold'>{title}</h3>
                    </div>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={currentSlide}
                render={{ slide: NextJsImage }}
            />
        </>
    );
}

export default Item__images;
