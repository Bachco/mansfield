import { ItemsProps } from '@/app/api/interfaces';
import React, { FC } from 'react';
import Item__images from './Item__images';
import Item__svg from './Item__svg';

const Items: FC<ItemsProps> = ({ items, setting, itemsClass, limit }) => {
    const limitedItems = limit ? items?.slice(0, limit) : items;

    return (
        <div className={`flex flex-wrap gap-7 ${itemsClass}`}>
            {setting === 'images' ? (
                limitedItems?.map((item, index) => (
                    <Item__images key={index} title={item.title} images={item.images} content={item.content} />
                ))
            ) : setting === 'svg' ? (
                limitedItems?.map((item, index) => (
                    <Item__svg key={index} title={item.title} iconString={item.iconString} content={item.content} />
                ))
            ) : null}
        </div>
    );
}

export default Items;
