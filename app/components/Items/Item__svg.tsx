import React, { FC } from 'react';
import { IconString, ItemProps } from '@/app/api/interfaces';
import { IconBaseProps } from 'react-icons';
import Icon__welder from '../Icon/Icon__welder';
import Icon__metal from '../Icon/Icon__metal';
import Icon__worker from '../Icon/Icon__worker';
import Icon__coop from '../Icon/Icon__coop';


const iconMap: Record<IconString, React.ComponentType<IconBaseProps>> = {
  "Icon__welder": Icon__welder,
  "Icon__metal": Icon__metal,
  "Icon__worker": Icon__worker,
  "Icon__coop": Icon__coop,

  /**
   * priklady pre react-icons
   * "HiOutlineWrenchScrewdriver": dynamic(() => import('react-icons/hi2').then(mod => mod.HiOutlineWrenchScrewdriver)),
   * "FaRegHandshake": dynamic(() => import('react-icons/fa').then(mod => mod.FaRegHandshake)),
   */
  
 
};

const validateIconPrefix = (iconName: string) => iconName.startsWith('Icon');

const Item__svg: FC<ItemProps> = ({ content, iconString, title }) => {
  const IconComponent = iconString ? iconMap[iconString] : null;
  const isIcon = IconComponent && iconString && validateIconPrefix(iconString);

  return (
    <div className='lg:w-[calc((100%-84px)/4)] lg:basis-[calc((100%-84px)/4)] sm:w-[calc((100%-28px)/2)] sm:basis-[calc((100%-28px)/2)] w-full basis-full bg-white py-14 px-6 group hover:bg-primary transition-colors duration-300 relative z-10'>
      {IconComponent && (
      isIcon 
      ? <IconComponent className={`mx-auto text-primary text-6xl mb-7 transition-colors group-hover:text-white duration-300 w-16 h-16`} /> 
      : <IconComponent className={`mx-auto text-primary text-6xl mb-7 transition-colors group-hover:text-white duration-300`} />)
      }
      <span className='inline-block w-8 h-[2px] mb-4 bg-primary group-hover:w-20 transition-all group-hover:bg-white duration-300' />
      <h3 className='text-3xl leading-10 mb-5 font-barlow font-semibold transition-colors group-hover:text-white duration-300'>{title}</h3>
      {content && <p className='text-cText text-sm transition-colors group-hover:text-white duration-300'>{content}</p>}
      {IconComponent && <IconComponent className='text-primary text-[180px] absolute -z-10 top-5 left-1/2 -translate-x-1/2 opacity-5 w-3/5'/>}
    </div>
  );
};

export default Item__svg;
