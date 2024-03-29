const resolve = require('path').resolve
const colors = {
  base: {
    DEFAULT: 'var(--base-color)'
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
  },
  icon: {
    DEFAULT: 'rgba(194, 194, 194, 1)',
    hover: 'rgba(146, 146, 146, 1)',
    active: 'rgba(175, 175, 175, 1)',
    disabled: 'rgba(209, 209, 209, 1)'
  }

}
const height = {
  mini: 'var(--height-mini)',
  tiny: 'var(--height-tiny)',
  small: 'var(--height-small)',
  medium: 'var(--height-medium)',
  large: 'var(--height-large)',
  huge: 'var(--height-huge)'
}
const fontSize = {
  mini: 'var(--font-size-mini)',
  tiny: 'var(--font-size-tiny)',
  small: 'var(--font-size-small)',
  medium: 'var(--font-size-medium)',
  large: 'var(--font-size-large)',
  huge: 'var(--font-size-huge)',
  icon: 'var(--font-size-icon)'
}
const padding = {
  mini: 'var(--padding-mini)',
  tiny: 'var(--padding-tiny)',
  small: 'var(--padding-small)',
  medium: 'var(--padding-medium)',
  large: 'var(--padding-large)',
  huge: 'var(--padding-huge)'
}

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/**/*.{vue,js,ts,jsx,tsx}',
    '../packages/passion-ui/packages/**/*.{vue,js,ts,jsx,tsx}',
    resolve(__dirname, '../../website/docs/components/**/*.{vue,js,ts,jsx,tsx}')
  ],
  safelist: [
    {
      pattern: /(h|text|p|rounded)-(mini|tiny|small|medium|large|huge)/
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
    {
      pattern: /p-.+/
      // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
  ],
  theme: {
    extend: {

      colors: {
        ...colors,
        icon: {
          DEFAULT: 'var(--icon-color)',
          hover: 'var(--icon-color-hover)',
          active: 'var(--icon-color-pressed)',
          disabled: 'var(--icon-color-disabled)'
        }
      },
      height,
      lineHeight: {
        DEFAULT: 'var(--line-height)',
        ...height
      },
      fontSize,
      padding,
      borderRadius: ({ theme }) => {
        return {
          DEFAULT: 'var(--border-radius)',
          mini: 'var(--border-radius-mini)',
          tiny: 'var(--border-radius-tiny)',
          small: 'var(--border-radius-small)',
          medium: 'var(--border-radius-medium)',
          large: 'var(--border-radius-large)',
          huge: 'var(--border-radius-huge)',
          mini50: 'calc(theme(height.mini) / 2)',
          tiny50: 'calc(theme(height.tiny) / 2)',
          small50: 'calc(theme(height.small) / 2)',
          medium50: 'calc(theme(height.medium) / 2)',
          large50: 'calc(theme(height.large) / 2)',
          huge50: 'calc(theme(height.huge) / 2)'
        }
      },
      opacity: {
        opac1: 'var(--opacity-1)',
        opac2: 'var(--opacity-2)',
        opac3: 'var(--opacity-3)',
        opac4: 'var(--opacity-4)',
        opac5: 'var(--opacity-5)',
        disabled: 'var(--opacity-disabled)'

      },
      textColor: {
        DEFAULT: 'var(--text-color-base)',
        tc1: 'var(--text-color-1)',
        tc2: 'var(--text-color-2)',
        tc3: 'var(--text-color-3)',
        disabled: 'var(--text-color-disabled)',
        ...colors
      },
      borderColor: {
        DEFAULT: 'var(--border-color)',
        ...colors
      },
      placeholderColor: {
        DEFAULT: 'var(--placeholder-color)',
        disabled: 'var(--placeholder-color-disabled)'
      },
      backgroundColor: {
        ...colors
      },
      boxShadow: {
        shadow1: 'var(--box-shadow-1)',
        shadow2: 'var(--box-shadow-2)',
        shadow3: 'var(--box-shadow-3)'
      }

    }
  }

  // plugins: [
  //   // plugin(typeStyle)
  // ]
}
