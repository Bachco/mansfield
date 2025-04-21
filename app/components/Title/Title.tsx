import { DataProps, TitleProps } from '@/app/api/interfaces';
import React from 'react';

const Title: React.FC<DataProps<TitleProps>> = ({data = {} as TitleProps}) => {
  
  const { title, specialClass, headingLevel, subTitle, preTitle } = data;

  const safeHeadingLevel = Math.min(3, Math.max(1, (headingLevel ? headingLevel : 1)));

  const headingClassNames: Record<number, string> = {
    1: 'h1 lg:text-[60px] text-[30px] mb-4',
    2: 'h2 lg:text-[60px] text-[30px] mb-4',
    3: 'h3 text-[30px] mb-2',
  };

  const className = `${headingClassNames[safeHeadingLevel]} ${specialClass} text-primary tracking-tight leading-tight font-semibold`;

  const preHeading = preTitle && React.createElement(
    'span',
    {className: 'block font-rubik text-base text-[#c3c8d4] leading-4 tracking-normal mb-5 uppercase'},
    preTitle
  )

  const heading = React.createElement(
    `h${safeHeadingLevel}`, 
    { className },
    preHeading,
    title
  );

  const subHeading = React.createElement(
    'p',
    {className: 'mb-[18px] text-[18px] text-primary leading-7'},
    subTitle
  );

  return <>{heading}{subHeading}
  </>;
};

export default Title;