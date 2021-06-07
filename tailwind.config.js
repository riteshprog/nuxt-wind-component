/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
 module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'museo-sans': ['museo-sans'],
        'museo-slab': ['museo-slab'],
      },
      scale: {
        '-1': '-1',
      },
      transitionProperty: {
        width: 'width',
      },
      colors: {
        primary: {
          50: '#FBFDFE',
          100: '#F4F9FB',
          200: '#CFE6ED',
          300: '#A9D2E0',
          400: '#84BFD2',
          500: '#5EABC4',
          600: '#4094B0',
          700: '#32748A',
          800: '#255565',
          900: '#17353F',
          1000: '#0F2329',
        },
        secondary: {
          50: '#FDFCFC',
          100: '#FAF7F5',
          200: '#F7F1EE',
          300: '#EEE3DD',
          400: '#E7D7CF',
          500: '#DFC9BE',
          600: '#CEAD9C',
          700: '#BD907A',
          800: '#AC7358',
          900: '#8C5C45',
        },
        tertiary: {
          50: '#E9D3D7',
          100: '#DFBEC4',
          200: '#CE9CA5',
          300: '#BD7A86',
          400: '#AC5867',
          500: '#8C4552',
          600: '#6A343E',
          700: '#48232A',
          800: '#261216',
          900: '#140A0C',
        },
        warning: {
          300: '#F0EDCC',
          400: '#E5E0A4',
          500: '#D9D27B',
          600: '#CEC555',
          700: '#BAB036',
        },
        success: {
          300: '#C2D8C1',
          400: '#A3C4A1',
          500: '#84B082',
          600: '#659C63',
          700: '#517D4F',
        },
        danger: {
          300: '#BD7A86',
          400: '#AC5867',
          500: '#8C4552',
          600: '#6A343E',
          700: '#48232A',
        },
      },
    },
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
      },
      variants: [],
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // './node_modules/@teamfunction/wind-components/src/components/**/*.vue',
      // 'Wind-Components/src/components/**/*.vue',
    ],
  },
}
