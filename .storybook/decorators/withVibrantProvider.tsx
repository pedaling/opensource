import * as ReactSpring from '@react-spring/web';
import type { DecoratorFn } from '@storybook/react';
import { VibrantProvider } from '@vibrant-ui/core';

const theme = {
  typographyWeight: {
    regular: {
      fontFamily: 'Pretendard',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Pretendard',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Pretendard',
      fontWeight: '700',
    },
    extraBold: {
      fontFamily: 'Pretendard',
      fontWeight: '800',
    },
  },
};

export const withVibrantProvider: DecoratorFn = storyFn => (
  <VibrantProvider
    theme={theme}
    dependencies={{
      reactSpringModule: ReactSpring,
    }}
    portalBottomPriorityOrder={['bottom-bar', 'floating-action-button']}
  >
    {storyFn()}
  </VibrantProvider>
);
