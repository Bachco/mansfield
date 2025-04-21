import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { isImageFitCover, isImageSlide } from 'yet-another-react-lightbox';

interface Slide {
    src: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
    [key: string]: any;
}

interface Rect {
    width: number;
    height: number;
}

export enum FitMode {
    Cover = "cover",
    Crop = "crop",
    Contain = "contain", // Pridáme aj defaultnú možnosť "contain"
}

interface NextJsImageProps {
    slide: Slide;
    offset: number;
    rect: Rect;
    fitMode?: FitMode; // Nový parameter na určenie režimu fitovania
    onClick?: () => void; // Volitelný handler kliknutí
}

export default function NextJsImage({ slide, rect, fitMode = FitMode.Contain, onClick }: NextJsImageProps) {
    const [sizes, setSizes] = useState<string>("100vw"); // Výchozí velikost

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const updateSizes = () => {
                setSizes(`${Math.ceil((rect.width / window.innerWidth) * 100)}vw`);
            };

            updateSizes();
            window.addEventListener('resize', updateSizes);
            return () => window.removeEventListener('resize', updateSizes);
        }
    }, [rect.width]);

    const isCover = fitMode === FitMode.Cover;
    const isCrop = fitMode === FitMode.Crop;

    const width = slide.width
        ? !isCover
            ? Math.round(Math.min(rect.width, (rect.height / (slide.height || 1)) * (slide.width || 1)))
            : rect.width
        : rect.width;

    const height = slide.height
        ? !isCover
            ? Math.round(Math.min(rect.height, (rect.width / (slide.width || 1)) * (slide.height || 1)))
            : rect.height
        : rect.height;

    return (
        <div style={{ position: 'relative', width, height }} onClick={onClick}>
            <Image
                fill
                alt=""
                src={slide.src}
                loading="lazy"
                draggable={false}
                placeholder={slide.blurDataURL ? "blur" : undefined}
                style={{
                    objectFit: isCover ? 'cover' : isCrop ? 'none' : 'contain', // Prispôsobenie podľa režimu
                    objectPosition: isCrop ? 'center' : undefined, // Pre "crop" nastavíme center pozíciu
                    cursor: 'pointer',
                }}
                sizes={sizes}
            />
        </div>
    );
}
