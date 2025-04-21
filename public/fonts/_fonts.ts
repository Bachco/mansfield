import localFont from 'next/font/local';


export const barlow = localFont({
    src: [
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-regular.woff2',
        weight: '400'
      },
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-500.woff2',
        weight: '500'
      },
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-600.woff2',
        weight: '600'
      },
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-700.woff2',
        weight: '700'
      },
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-800.woff2',
        weight: '800'
      },
      {
        path: 'barlow/barlow-condensed-v12-latin_latin-ext-900.woff2',
        weight: '900'
      }
    ], 
    variable: '--font-barlow'
  })

  export const rubik = localFont({
    src: [
      {
        path: 'rubik/rubik-v28-latin_latin-ext-regular.woff2',
        weight: '400'
      },
      {
        path: 'rubik/rubik-v28-latin_latin-ext-500.woff2',
        weight: '500'
      },
      {
        path: 'rubik/rubik-v28-latin_latin-ext-600.woff2',
        weight: '600'
      },
      {
        path: 'rubik/rubik-v28-latin_latin-ext-700.woff2',
        weight: '700'
      },
      {
        path: 'rubik/rubik-v28-latin_latin-ext-800.woff2',
        weight: '800'
      },
      {
        path: 'rubik/rubik-v28-latin_latin-ext-900.woff2',
        weight: '900'
      }
    ],
    variable: '--font-rubik'
  })

  export const garamond = localFont({
    src: [
      {
        path: 'garamond/cormorant-garamond-v19-latin_latin-ext-regular.woff2',
        weight: '400'
      },
      {
        path: 'garamond/cormorant-garamond-v19-latin_latin-ext-500.woff2',
        weight: '500'
      },
      {
        path: 'garamond/cormorant-garamond-v19-latin_latin-ext-600.woff2',
        weight: '600'
      },
      {
        path: 'garamond/cormorant-garamond-v19-latin_latin-ext-700.woff2',
        weight: '700'
      }
    ],
    variable: '--font-garamond'
  })