import { ElementProps, IconString } from '@/app/api/interfaces';

interface ContactProps {
    phone?: string;
    mail?: string;
    address?: string;
    contactData?: string;
}

export const contacts: ContactProps = {
    phone: "+421 904 951 470",
    mail: "info@bmwelding.sk",
    address: "<div><strong>BM WELDING, s.r.o.</strong><br>Ľubľanská 2982/8<br>010 08 Žilina<br>Slovenská republika</div>",
    contactData: "<div><strong>IČO:</strong> 46870059<br><strong>DIČ:</strong> 2023623206<br><strong>IČ DPH:</strong> SK2023623206</div>"
}

export const pageContactData: ElementProps = {
    title: {
        title: 'Kontakt',
        headingLevel: 1,
        preTitle: 'Kontaktujte nás'
    }
};

export const pageAboutData: ElementProps = {
    title: {
        title: 'Spoľahlivosť, rýchlosť a kvalita.',
        subTitle: 'Snívajte vo veľkom a získajte odtiaľto viac inšpiratívnych riešení.',
        headingLevel: 2,
        preTitle: 'O nás'
    },
    content: '<p><strong>Spoločnosť BM WELDING</strong> je mladá a dynamická firma, ktorá sa špecializuje na výrobu kovových produktov na mieru a montážne práce.</p>'
    +'<p>Spoločnosť bola založená odborníkmi s hlbokým porozumením a skúsenosťami v oblasti kovovýroby. Tam, kde vznikajú výzvy, sa vždy rodia aj riešenia, s ktorými vám radi pomôžeme.</p>'
    +'<p>Čím väčšia je výzva, tým väčšie je naše nadšenie pre projekt. Či už ide o zábradlie, prístrešok, konštrukciu alebo zváranie z lana, s nami môžete mať istotu, že máte spoľahlivého partnera po svojom boku. Neváhajte nás kontaktovať.</p>'
    +'<p>Spokojnosť našich klientov hovorí za všetko. Dodržiavame dohodnuté termíny, garantujeme vysokú kvalitu výrobkov a poskytujeme individuálny prístup ku každému zákazníkovi.</p>',
    image: '/images/Element/1.jpg'
};

export const pageData: ElementProps = {
    title: {
        title: 'Námestie Slovenskej republiky 5/8, 014 01 Bytča',
        headingLevel: 1,
        specialClass: 'mb-0'
    },
};



export const servicesData: ElementProps = {
    title: {
        title: 'Čo robíme.',
        headingLevel: 2,
        preTitle: 'Služby',
        subTitle: 'Široká škála služieb – od spracovania rôznych materiálov až po realizáciu náročných projektov'
    },
    items: {
        setting: 'svg',
        items: [
            {
                title: "Zváranie",
                content: "Zváranie rôznych materiálov pomocou metód MMA, MIG/MAG a TIG.",
                iconString: "Icon__welder" as IconString
            },
            {
                title: "Kovovýroba",
                content: "Od spracovania materiálu až po finálne detaily výroby.",
                iconString: "Icon__metal" as IconString
            },
            {
                title: "Montáže",
                content: "Od využitia lešenia, plošín, áut s hydraulickou rukou až po práce na lane – pre nás nič nie je problém.",
                iconString: "Icon__worker" as IconString
            },
            {
                title: "Spolupráca",
                content: "Ponúkame spoluprácu na projektoch – či už formou personálnej výpomoci, alebo komplexného spracovania zákazky.",
                iconString: "Icon__coop" as IconString
            },
        ]
    }
};

export const portfolioData: ElementProps = {
    title: {
        title: 'Čo sme už vytvorili.',
        headingLevel: 2,
        preTitle: 'Naša práca'
    },
    items: {
        setting: 'images',
        items: [
            {
                title: "Prístrešok",
                content: "Varin",
                images: [
                    { link: "/images/Portfolio/0/1.jpg" },
                    { link: "/images/Portfolio/0/2.jpg" }
                ]
            },
            {
                title: "Oprava jamy STK",
                content: "Žilina",
                images: [
                    { link: "/images/Portfolio/1/1.jpg" },
                    { link: "/images/Portfolio/1/2.jpg" }
                ]
            },
            {
                title: "Protizvuková ochrana",
                content: "Bratislava",
                images: [
                    { link: "/images/Portfolio/2/1.jpg" },
                    { link: "/images/Portfolio/2/2.jpg" }
                ]
            },
            {
                title: "Spevňovanie statiky strechy skladu",
                content: "Neografia Martin",
                images: [
                    { link: "/images/Portfolio/3/1.jpg" },
                    { link: "/images/Portfolio/3/2.jpg" }
                ]
            },
            {
                title: "Oprava brzdy stk",
                content: "Žilina",
                images: [
                    { link: "/images/Portfolio/4/1.jpg" },
                    { link: "/images/Portfolio/4/2.jpg" }
                ]
            },
            {
                title: "Rekonštrukcia obchodu, preklad",
                content: "Nová Bystrica",
                images: [
                    { link: "/images/Portfolio/5/1.jpg" },
                    { link: "/images/Portfolio/5/2.jpg" },
                    { link: "/images/Portfolio/5/3.jpg" }
                ]
            },
            {
                title: "Prístrešok s konzolou na klimatizáciu ",
                images: [
                    { link: "/images/Portfolio/6/1.jpg" },
                ]
            },
            {
                title: "Zábradlie",
                images: [
                    { link: "/images/Portfolio/7/1.jpg" },
                    { link: "/images/Portfolio/7/2.jpg" },
                ]
            },
            {
                title: "Schodisko a zábradlie",
                images: [
                    { link: "/images/Portfolio/8/1.jpg" }
                ]
            },
            {
                title: "Stojisko na kontajnery",
                content: "Bytča",
                images: [
                    { link: "/images/Portfolio/9/1.jpg" }
                ]
            },
            {
                title: "Krídlová brána",
                content: "Kysucké Nové Mesto",
                images: [
                    { link: "/images/Portfolio/10/1.jpg" }
                ]
            },
            {
                title: "Posuvná brána",
                content: "Budatínska Lehota",
                images: [
                    { link: "/images/Portfolio/11/1.jpg" }
                ]
            },
            {
                title: "Schody",
                content: "Oščadnica",
                images: [
                    { link: "/images/Portfolio/12/1.jpg" }
                ]
            },
            {
                title: "Balkón",
                content: "Čadca",
                images: [
                    { link: "/images/Portfolio/13/1.jpg" },
                    { link: "/images/Portfolio/13/2.jpg" }
                ]
            },
            {
                title: "Zabradlie mosta",
                content: "Čierny Balog",
                images: [
                    { link: "/images/Portfolio/14/1.jpg" },
                    { link: "/images/Portfolio/14/2.jpg" }
                ]
            },
            {
                title: "Prerábka mosta",
                content: "závod Duslo Šaľa",
                images: [
                    { link: "/images/Portfolio/15/1.jpg" },
                    { link: "/images/Portfolio/15/2.jpg" },
                    { link: "/images/Portfolio/15/3.jpg" },
                ]
            },
            {
                title: "Rekonštrukcia potrubného mosta",
                content: "závod Duslo Šaľa",
                images: [
                    { link: "/images/Portfolio/16/1.jpg" },
                    { link: "/images/Portfolio/16/2.jpg" },
                    { link: "/images/Portfolio/16/3.jpg" },
                    { link: "/images/Portfolio/16/4.jpg" }
                ]
            },
            {
                title: "Protidotyková ochrana",
                content: "Zvolen -Pustý hrad",
                images: [
                    { link: "/images/Portfolio/17/1.jpg" },
                    { link: "/images/Portfolio/17/2.jpg" },
                ]
            },
            {
                title: "Terasové zábradlie",
                content: "Bytča",
                images: [
                    { link: "/images/Portfolio/18/1.jpg" },
                    { link: "/images/Portfolio/18/2.jpg" },
                ]
            },
            {
                title: "Prístrešok",
                content: "Jednota Nová Bystrica",
                images: [
                    { link: "/images/Portfolio/19/1.jpg" },
                ]
            },
            {
                title: "Oceľová konštrukcia",
                images: [
                    { link: "/images/Portfolio/20/1.jpg" },
                ]
            },
            {
                title: "Nerezový balkón + francúzke okno",
                content: "Kysucké Nové Mesto",
                images: [
                    { link: "/images/Portfolio/21/1.jpg" },
                    { link: "/images/Portfolio/21/2.jpg" },
                ]
            },
            {
                title: "Stajňa pre kone",
                content: "Makov",
                images: [
                    { link: "/images/Portfolio/22/1.jpg" },
                    { link: "/images/Portfolio/22/2.jpg" },
                ]
            },
            {
                title: "Malé stojisko na kontajnery",
                images: [
                    { link: "/images/Portfolio/23/1.jpg" },
                    { link: "/images/Portfolio/23/2.jpg" },
                ]
            },
            {
                title: "Oprava opláštenia nerezových lopatiek difúznej veže",
                images: [
                    { link: "/images/Portfolio/24/1.jpg" },
                    { link: "/images/Portfolio/24/2.jpg" },
                    { link: "/images/Portfolio/24/3.jpg" },
                    { link: "/images/Portfolio/24/4.jpg" },
                    { link: "/images/Portfolio/24/5.jpg" },
                    { link: "/images/Portfolio/24/6.jpg" },
                ]
            },
        ],
    }
};

export const pagePortfolioData: ElementProps = {
    ...portfolioData,
    title: {
        ...portfolioData.title,
        headingLevel: 1
    }
};

export const hpPortfolioData: ElementProps = {
    ...portfolioData,
    items: {
        ...portfolioData.items,
        setting: portfolioData.items?.setting || "images",
        limit: 6,
    },
};

export const pageServicesData: ElementProps = {
    ...servicesData,
    title: {
        ...servicesData.title,
        headingLevel: 1
    }
};

export const navData = [
    {
        name: "Domov",
        path: "/",
    },
    {
        name: "O nás",
        path: "/about",
    },
    {
        name: "Služby",
        path: "/services",
    },
    {
        name: "Naša práca",
        path: "/work",
    },
    {
        name: "Kontakt",
        path: "/contact",
    },
];

export const BannerData = {
    items: [
      {
        src: '/images/1.jpg',
        title: 'Mladá a dynamická firma s odborným prístupom',
        subTitle: 'Spoľahlivý partner v kovovýrobe',
        content: "Vyrábame na mieru, montujeme s presnosťou a plníme vaše očakávania.",
        link: "/about",
        linkTitle: "O nás"
      },
      {
        src: '/images/2.jpg',
        title: 'Kvalita a precíznosť v každom detaile',
        subTitle: 'Realizované projekty na mieru',
        content: "Prezrite si naše úspešné projekty a nechajte sa inšpirovať.",
        link: "/work",
        linkTitle: "Naša práca"
      },
      {
        src: '/images/3.jpg',
        title: 'Široká škála služieb od zábradlí po zváranie',
        subTitle: 'Naša práca, vaša spokojnosť',
        content: "Poskytujeme profesionálne služby pre vaše kovové projekty.",
        link: "/services",
        linkTitle: "Služby"
      },
    ]
};
