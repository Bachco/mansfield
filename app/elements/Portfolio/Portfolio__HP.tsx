import { DataProps, ElementProps, WrapType } from '@/app/api/interfaces';
import React from 'react';
import ElementWrap__default from '@/app/components/ElementWrap/ElementWrap__default';

const Portfolio__HP: React.FC<DataProps<ElementProps>> = ({ data = {} as ElementProps }) => {

    return (
        <ElementWrap__default data={data} customClass='text-center md:py-32 py-16' wrapType={WrapType.default} />
    );
}

export default Portfolio__HP;
