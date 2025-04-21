import React from 'react'
import { DataProps, ElementProps, WrapType } from '@/app/api/interfaces';
import ElementWrap__default from '@/app/components/ElementWrap/ElementWrap__default';

const Services__HP: React.FC<DataProps<ElementProps>> = ({ data = {} as ElementProps }) => {

    return (
            <ElementWrap__default data={data} customClass='text-center md:py-32 py-16' wrapType={WrapType.narrow} />
    );
}

export default Services__HP;
