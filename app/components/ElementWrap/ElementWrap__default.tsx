import {  ElementWrapProps, ElementWrapPropsExtended, WrapType } from '@/app/api/interfaces';
import React, { FC } from 'react';
import Title from '../Title/Title';
import Items from '../Items/Items';
import Content from '../Content/Content';
import ContainerWrap__narrow from '../ContainerWrap/ContainerWrap__narrow';
import ContainerWrap__wide from '../ContainerWrap/ContainerWrap__wide';
import ContainerWrap from '../ContainerWrap/ContainerWrap';

// Definovanie typov obalov


const ElementWrap__default: FC<ElementWrapPropsExtended> = ({ data = {} as ElementWrapProps, customClass = '', wrapType = WrapType.default, children }) => {
    const { title, content, items } = data;
    const elClass = `text-center md:py-4 py-2 ${customClass}`.trim();

    // Funkcia na získanie správneho komponentu obalu na základe wrapType
    const getWrapperComponent = () => {
        switch (wrapType) {
            case WrapType.narrow:
                return ContainerWrap__narrow;
            case WrapType.wide:
                return ContainerWrap__wide;
            case WrapType.clean:
                return React.Fragment; // Použiť Fragment, ak nechceme žiaden obal
            default:
                return ContainerWrap;
        }
    };

    // Získať príslušný komponent obalu
    const WrapperComponent = getWrapperComponent();

    return (
        <section className={elClass}>
            <WrapperComponent>
                <div>
                    {title && <Title data={title} />}
                    
                </div>
                {content && (
                    <div>
                        <Content content={content} />
                    </div>
                )}
                {items && <div><Items items={items?.items} setting={items?.setting} limit={items?.limit} /></div>}
                {children}
            </WrapperComponent>
        </section>
    );
};

export default ElementWrap__default;
