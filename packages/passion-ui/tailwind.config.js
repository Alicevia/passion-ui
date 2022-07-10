// import plugin from 'tailwindcss/plugin'
// import { typeStyle } from './packages/button/src/style/index.ts'
// const plugin = require('tailwindcss/plugin')
// const { typeStyle } = require('./packages/button/src/style/index.ts')
// console.log(typeStyle)
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /p-.+/
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: 'var(--base-color)'
        },
        text: {
          DEFAULT: 'var(--text-color-base)',
          1: 'var(--text-color-1)',
          2: 'var(--text-color-2)',
          3: 'var(--text-color-3)',
          disabled: 'var(--text-color-disabled)'
        },
        border: {
          DEFAULT: 'var(--border-color)'
        },
        primary: {
          DEFAULT: 'var(--primary-color)',
          hover: 'var(--primary-color-hover)',
          active: 'var(--primary-color-pressed)',
          focus: 'var(--primary-color-hover)'
        },
        info: {
          DEFAULT: 'var(--info-color)',
          hover: 'var(--info-color-hover)',
          active: 'var(--info-color-pressed)',
          focus: 'var(--info-color-hover)'
        },
        success: {
          DEFAULT: 'var(--success-color)',
          hover: 'var(--success-color-hover)',
          active: 'var(--success-color-pressed)',
          focus: 'var(--success-color-hover)'
        },
        warning: {
          DEFAULT: 'var(--warning-color)',
          hover: 'var(--warning-color-hover)',
          active: 'var(--warning-color-pressed)',
          focus: 'var(--warning-color-hover)'
        },
        error: {
          DEFAULT: 'var(--error-color)',
          hover: 'var(--error-color-hover)',
          active: 'var(--error-color-pressed)',
          focus: 'var(--error-color-hover)'
        }
      }

    }
  }
  // plugins: [
  //   // plugin(typeStyle)
  // ]
}
