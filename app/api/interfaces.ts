export interface WraperProps {
    children: React.ReactNode;
    customClass?: string;
}

export type IconString = 'Icon__welder' | 'Icon__metal' | 'Icon__worker' | 'Icon__coop';

/**
 * priklad export react-icons 
 * 
export type IconString = 'Icon__welder' | 'Icon__metal' | 'HiOutlineWrenchScrewdriver' | 'FaRegHandshake';
 */

export interface TitleProps {
    title: string;
    specialClass?: string;
    headingLevel?: number;
    subTitle?: string;
    preTitle?: string;
}

export interface ImageItem {
    link: string;
}

export interface ItemProps {
    title: string;
    iconString?: IconString;
    content?: string;
    images?: ImageItem[];
}

export interface DataProps<T> {
    data?: T;
}

export interface ItemsProps {
    items?: ItemProps[];
    setting: keyof typeof ItemsSettings;
    itemsClass?: string;
    limit?: number;
}

export interface ElementProps {
    title: TitleProps;
    content?: string;
    image?: string;
    items?: ItemsProps;
    link?: string;
    linkString?: string;
}

export interface ElementWrapProps {
    title: TitleProps;
    content?: string;
    image?: string;
    items?: ItemsProps;
}

export enum ItemsSettings {
    images,
    svg
}

export enum WrapType {
    default,
    narrow,
    wide,
    clean
}

export interface ElementWrapPropsExtended extends DataProps<ElementWrapProps> {
    customClass?: string;
    wrapType?: WrapType;
    children?: React.ReactNode
}
