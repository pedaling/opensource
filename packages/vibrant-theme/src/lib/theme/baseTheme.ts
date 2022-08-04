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
      fontFamily: 'Pretendard',
      fontSize: '6rem',
      fontWeight: 'extraBold',
      lineHeight: '6.75rem',
    },
    display2: {
      fontFamily: 'Pretendard',
      fontSize: '4.5rem',
      fontWeight: 'extraBold',
      lineHeight: '5.375rem',
    },
    display3: {
      fontFamily: 'Pretendard',
      fontSize: '3rem',
      fontWeight: 'extraBold',
      lineHeight: '3.75rem',
    },
    display4: {
      fontFamily: 'Pretendard',
      fontSize: '2.5rem',
      fontWeight: 'extraBold',
      lineHeight: '3.125rem',
    },
    title1: {
      fontFamily: 'Pretendard',
      fontSize: '2.125rem',
      fontWeight: 'bold',
      lineHeight: '2.75rem',
    },
    title2: {
      fontFamily: 'Pretendard',
      fontSize: '1.75rem',
      fontWeight: 'bold',
      lineHeight: '2.5rem',
    },
    title3: {
      fontFamily: 'Pretendard',
      fontSize: '1.625rem',
      fontWeight: 'bold',
      lineHeight: '2.25rem',
    },
    title4: {
      fontFamily: 'Pretendard',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      lineHeight: '1.625rem',
    },
    title5: {
      fontFamily: 'Pretendard',
      fontSize: '1.125rem',
      fontWeight: 'bold',
      lineHeight: '1.375rem',
    },
    title6: {
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.25rem',
    },
    title7: {
      fontFamily: 'Pretendard',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      lineHeight: '1.125rem',
    },
    body1: {
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: 'regular',
      lineHeight: '1.25rem',
    },
    body2: {
      fontFamily: 'Pretendard',
      fontSize: '0.875rem',
      fontWeight: 'regular',
      lineHeight: '1.125rem',
    },
    body3: {
      fontFamily: 'Pretendard',
      fontSize: '0.8125rem',
      fontWeight: 'regular',
      lineHeight: '1.125rem',
    },
    body4: {
      fontFamily: 'Pretendard',
      fontSize: '0.75rem',
      fontWeight: 'regular',
      lineHeight: '1rem',
    },
    body5: {
      fontFamily: 'Pretendard',
      fontSize: '0.6875rem',
      fontWeight: 'regular',
      lineHeight: '0.875rem',
    },
    body6: {
      fontFamily: 'Pretendard',
      fontSize: '0.625rem',
      fontWeight: 'regular',
      lineHeight: '0.75rem',
    },
    paragraph1: {
      fontFamily: 'Pretendard',
      fontSize: '1.25rem',
      fontWeight: 'regular',
      lineHeight: '1.875rem',
    },
    paragraph2: {
      fontFamily: 'Pretendard',
      fontSize: '1.125rem',
      fontWeight: 'regular',
      lineHeight: '1.875rem',
    },
    paragraph3: {
      fontFamily: 'Pretendard',
      fontSize: '1rem',
      fontWeight: 'regular',
      lineHeight: '1.75rem',
    },
  },
  typographyWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
  borderRadius: {
    0: 0,
    1: 2,
    2: 12,
    3: 16,
    4: 20,
    5: '50%',
  },
  mode: 'light',
};
