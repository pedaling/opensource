import * as ReactSpring from '@react-spring/web';
import type { DecoratorFn } from '@storybook/react';
import { VibrantProvider } from '@vibrant-ui/core';

const theme = {
  typographyWeight: {
    regular: {
      fontFamily: 'Pretendard, "Pretendard JP"',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Pretendard, "Pretendard JP"',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Pretendard, "Pretendard JP"',
      fontWeight: '700',
    },
    extraBold: {
      fontFamily: 'Pretendard, "Pretendard JP"',
      fontWeight: '800',
    },
  },
};

export const withVibrantProvider: DecoratorFn = StoryComponent => (
  <VibrantProvider
    theme={theme}
    dependencies={{
      reactSpringModule: ReactSpring,
    }}
    portalBottomPriorityOrder={['bottom-bar', 'floating-action-button']}
  >
    <StoryComponent />
  </VibrantProvider>
);
