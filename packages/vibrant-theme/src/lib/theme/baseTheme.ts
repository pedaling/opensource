import type { Theme } from '../../types';
import { darkModeColors } from './darkModeColors';
import { darkModeElevation } from './darkModeElevation';
import { darkModeGradient } from './darkModeGradient';
import { darkModeOpacity } from './darkModeOpacity';
import { lightModeColors } from './lightModeColors';
import { lightModeElevation } from './lightModeElevation';
import { lightModeGradient } from './lightModeGradient';
import { lightModeOpacity } from './lightModeOpacity';

export const baseTheme: Theme = {
  breakpoints: [640, 1024, 1312],
  contentArea: {
    maxWidth: 1344,
    padding: 20,
  },
  colors: {
    light: lightModeColors,
    dark: darkModeColors,
  },
  elevation: {
    light: lightModeElevation,
    dark: darkModeElevation,
  },
  gradient: {
    light: lightModeGradient,
    dark: darkModeGradient,
  },
  opacity: {
    light: lightModeOpacity,
    dark: darkModeOpacity,
  },
  typography: {
    display1: {
      fontSize: '6rem',
      lineHeight: '6.75rem',
    },
    display2: {
      fontSize: '4.5rem',
      lineHeight: '5.375rem',
    },
    display3: {
      fontSize: '3rem',
      lineHeight: '3.75rem',
    },
    display4: {
      fontSize: '2.5rem',
      lineHeight: '3.125rem',
    },
    title1: {
      fontSize: '2.125rem',
      lineHeight: '2.75rem',
    },
    title2: {
      fontSize: '1.75rem',
      lineHeight: '2.5rem',
    },
    title3: {
      fontSize: '1.625rem',
      lineHeight: '2.25rem',
    },
    title4: {
      fontSize: '1.25rem',
      lineHeight: '1.625rem',
    },
    title5: {
      fontSize: '1.125rem',
      lineHeight: '1.375rem',
    },
    title6: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    title7: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
    },
    body3: {
      fontSize: '0.8125rem',
      lineHeight: '1.125rem',
    },
    body4: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    body5: {
      fontSize: '0.6875rem',
      lineHeight: '0.875rem',
    },
    body6: {
      fontSize: '0.625rem',
      lineHeight: '0.75rem',
    },
    paragraph1: {
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
    paragraph2: {
      fontSize: '1.125rem',
      lineHeight: '1.875rem',
    },
    paragraph3: {
      fontSize: '1rem',
      lineHeight: '1.75rem',
    },
  },
  typographyWeight: {
    regular: {
      fontWeight: '400',
    },
    medium: {
      fontWeight: '500',
    },
    bold: {
      fontWeight: '700',
    },
    extraBold: {
      fontWeight: '800',
    },
  },
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 20,
    full: 10000,
  },
  zIndex: {
    bottomBar: 1,
    dropdown: 3,
    floatingActionButton: 1,
    modalBottomSheet: 2,
    toast: 4,
    popover: 4,
  },
  mode: 'light',
};
