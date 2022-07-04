import type { Theme } from '../types';
import { darkModeColors } from './darkModeColors';
import { darkModeOpacity } from './darkModeOpacity';
import { lightModeColors } from './lightModeColors';
import { lightModeOpacity } from './lightModeOpacity';

export const baseTheme: Theme = {
  breakpoints: [640, 1024, 1312],
  colors: {
    light: lightModeColors,
    dark: darkModeColors,
  },
  opacity: {
    light: lightModeOpacity,
    dark: darkModeOpacity,
  },
  typography: {
    size: {
      display1: {
        fontFamily: 'Pretendard',
        fontSize: '6rem',
        lineHeight: '6.75rem',
        fontWeight: 'extraBold',
      },
      display2: {
        fontFamily: 'Pretendard',
        fontSize: '4.5rem',
        lineHeight: '5.375rem',
        fontWeight: 'extraBold',
      },
      display3: {
        fontFamily: 'Pretendard',
        fontSize: '3rem',
        lineHeight: '3.75rem',
        fontWeight: 'extraBold',
      },
      display4: {
        fontFamily: 'Pretendard',
        fontSize: '2.5rem',
        lineHeight: '3.125rem',
        fontWeight: 'extraBold',
      },
      title1: {
        fontFamily: 'Pretendard',
        fontSize: '2.125rem',
        lineHeight: '2.75rem',
        fontWeight: 'bold',
      },
      title2: {
        fontFamily: 'Pretendard',
        fontSize: '1.75rem',
        lineHeight: '2.5rem',
        fontWeight: 'bold',
      },
      title3: {
        fontFamily: 'Pretendard',
        fontSize: '1.625rem',
        lineHeight: '2.25rem',
        fontWeight: 'bold',
      },
      title4: {
        fontFamily: 'Pretendard',
        fontSize: '1.25rem',
        lineHeight: '1.625rem',
        fontWeight: 'bold',
      },
      title5: {
        fontFamily: 'Pretendard',
        fontSize: '1.125rem',
        lineHeight: '1.375rem',
        fontWeight: 'bold',
      },
      title6: {
        fontFamily: 'Pretendard',
        fontSize: '1rem',
        lineHeight: '1.25rem',
        fontWeight: 'bold',
      },
      title7: {
        fontFamily: 'Pretendard',
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        fontWeight: 'bold',
      },
      body1: {
        fontFamily: 'Pretendard',
        fontSize: '1rem',
        lineHeight: '1.25rem',
        fontWeight: 'regular',
      },
      body2: {
        fontFamily: 'Pretendard',
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        fontWeight: 'regular',
      },
      body3: {
        fontFamily: 'Pretendard',
        fontSize: '0.8125rem',
        lineHeight: '1.125rem',
        fontWeight: 'regular',
      },
      body4: {
        fontFamily: 'Pretendard',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontWeight: 'regular',
      },
      body5: {
        fontFamily: 'Pretendard',
        fontSize: '0.6875rem',
        lineHeight: '0.875rem',
        fontWeight: 'regular',
      },
      body6: {
        fontFamily: 'Pretendard',
        fontSize: '0.625rem',
        lineHeight: '0.75rem',
        fontWeight: 'regular',
      },
      paragraph1: {
        fontFamily: 'Pretendard',
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        fontWeight: 'regular',
      },
      paragraph2: {
        fontFamily: 'Pretendard',
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
        fontWeight: 'regular',
      },
      paragraph3: {
        fontFamily: 'Pretendard',
        fontSize: '1rem',
        lineHeight: '1.75rem',
        fontWeight: 'regular',
      },
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extraBold: 800,
    },
  },
  mode: 'light',
};
